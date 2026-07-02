import json
import os
import psycopg2


def handler(event: dict, context) -> dict:
    '''
    Business: Принимает заявки из формы обратной связи и сохраняет их в базу данных
    Args: event - dict с httpMethod, body (name, contact); context - объект с request_id
    Returns: HTTP-ответ со статусом сохранения заявки
    '''
    method = event.get('httpMethod', 'GET')

    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
    }

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {**cors_headers, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Method not allowed'}),
        }

    body_data = json.loads(event.get('body') or '{}')
    name = (body_data.get('name') or '').strip()
    contact = (body_data.get('contact') or '').strip()

    if not name or not contact:
        return {
            'statusCode': 400,
            'headers': {**cors_headers, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Имя и контакт обязательны'}),
        }

    name = name[:255]
    contact = contact[:255]

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO contact_requests (name, contact) VALUES (%s, %s) RETURNING id",
        (name, contact),
    )
    new_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': {**cors_headers, 'Content-Type': 'application/json'},
        'body': json.dumps({'success': True, 'id': new_id}),
    }
