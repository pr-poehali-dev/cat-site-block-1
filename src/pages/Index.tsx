import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

const FRUITS = 'https://cdn.poehali.dev/projects/2b19800d-1a03-4ba4-a8f9-d77388d88a2b/bucket/469d3c77-c84d-44ad-9e48-15e9cac0755e.png';
const JUNGLE_BG = 'https://cdn.poehali.dev/projects/2b19800d-1a03-4ba4-a8f9-d77388d88a2b/files/a260a377-f56c-4ecd-9403-e8aa746f3d81.jpg';

const PRODUCTS = [
  {
    img: 'https://cdn.poehali.dev/projects/2b19800d-1a03-4ba4-a8f9-d77388d88a2b/files/239cd101-d4f1-4a6e-96fc-cb2beccf6617.jpg',
    emoji: '🟣',
    name: 'Мангостин',
    subtitle: '«Королева тропиков»',
    weight: '500 г',
    price: '500 ₽',
    inStock: true,
    stockLabel: 'Есть в наличии',
    accent: '280 60% 60%',
  },
  {
    img: 'https://cdn.poehali.dev/projects/2b19800d-1a03-4ba4-a8f9-d77388d88a2b/files/bea4aada-d648-4b27-8ec1-dde5a1cc7dcc.jpg',
    emoji: '🔴',
    name: 'Питахайя красная',
    subtitle: 'Дракон-фрукт',
    weight: '1 шт (~300 г)',
    price: '390 ₽',
    inStock: true,
    stockLabel: 'Есть в наличии',
    accent: '345 85% 58%',
  },
  {
    img: 'https://cdn.poehali.dev/projects/2b19800d-1a03-4ba4-a8f9-d77388d88a2b/files/0201193b-e082-407e-8d48-509335f86c40.jpg',
    hoverImg: 'https://cdn.poehali.dev/projects/2b19800d-1a03-4ba4-a8f9-d77388d88a2b/bucket/d4943654-5cc6-4b2c-84d1-fb17917d4d68.jpg',
    emoji: '🟡',
    name: 'Манго Nam Dok Mai',
    subtitle: 'сладкое, без волокна',
    weight: '1 кг',
    price: '650 ₽',
    inStock: true,
    stockLabel: 'Есть в наличии',
    accent: '45 95% 55%',
  },
  {
    img: 'https://cdn.poehali.dev/projects/2b19800d-1a03-4ba4-a8f9-d77388d88a2b/files/abcc3822-d1ad-4fe4-b2a1-ebb322ffbdfe.jpg',
    emoji: '🌸',
    name: 'Рамбутан',
    subtitle: 'сочный и сладкий',
    weight: '500 г',
    price: '520 ₽',
    inStock: true,
    stockLabel: 'Есть в наличии',
    accent: '350 80% 60%',
  },
  {
    img: 'https://cdn.poehali.dev/projects/2b19800d-1a03-4ba4-a8f9-d77388d88a2b/files/57e65d6d-47f5-4165-98ce-7fbc63a9ab09.jpg',
    emoji: '🍈',
    name: 'Лонган',
    subtitle: 'медовый вкус',
    weight: '500 г',
    price: '480 ₽',
    inStock: false,
    stockLabel: 'Мало',
    accent: '35 70% 55%',
  },
  {
    img: 'https://cdn.poehali.dev/projects/2b19800d-1a03-4ba4-a8f9-d77388d88a2b/files/67089a42-0b36-435b-8d7d-69426e439584.jpg',
    emoji: '🟠',
    name: 'Маракуйя',
    subtitle: 'яркая кислинка',
    weight: '3 шт',
    price: '370 ₽',
    inStock: true,
    stockLabel: 'Есть в наличии',
    accent: '25 95% 55%',
  },
  {
    img: 'https://cdn.poehali.dev/projects/2b19800d-1a03-4ba4-a8f9-d77388d88a2b/files/f072ab03-7f4c-4561-a154-2bf7fbce7a42.jpg',
    emoji: '🍍',
    name: 'Ананас',
    subtitle: 'медово-сладкий',
    weight: '1 шт (~1,2 кг)',
    price: '300 ₽',
    inStock: true,
    stockLabel: 'Есть в наличии',
    accent: '45 95% 55%',
  },
  {
    img: 'https://cdn.poehali.dev/projects/2b19800d-1a03-4ba4-a8f9-d77388d88a2b/files/9b234a75-afd2-47f5-9184-8ad28f5c854b.jpg',
    emoji: '🍉',
    name: 'Арбуз',
    subtitle: 'сочный и сахарный',
    weight: '1 шт (~3 кг)',
    price: '300 ₽',
    inStock: true,
    stockLabel: 'Есть в наличии',
    accent: '345 80% 58%',
  },
];

const Index = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [sent, setSent] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch(
        'https://functions.poehali.dev/f5c1a839-fd94-496e-aa03-a376609cbefc',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: name.trim(), contact: contact.trim() }),
        },
      );
      if (!res.ok) throw new Error('fail');
      setSent(true);
    } catch {
      setError('Не удалось отправить заявку. Попробуйте ещё раз.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <a
        href="https://t.me/Keranos1st"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в Telegram"
        className="glow-green group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-lg transition hover:scale-110"
      >
        <Icon name="Send" size={26} />
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-secondary px-3 py-1.5 text-sm font-bold text-secondary-foreground opacity-0 shadow-md transition group-hover:opacity-100">
          Написать в Telegram
        </span>
      </a>
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-cover bg-center bg-fixed opacity-30"
        style={{ backgroundImage: `url(${JUNGLE_BG})` }}
      />
      <div className="pointer-events-none fixed inset-0 z-0 bg-background/70" />
      <div className="relative z-10 tropic-bg">
      <section className="container flex min-h-screen flex-col items-center justify-center py-16 text-center">
        <span className="animate-pop-in mb-8 inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-5 py-2 text-sm font-semibold text-secondary">
          <Icon name="Plane" size={16} /> Прямые поставки из Бангкока
        </span>

        <div className="relative mb-10 flex justify-center">
          <div className="absolute inset-0 m-auto h-64 w-64 rounded-full bg-primary/30 blur-[90px]" />
          <div className="absolute inset-0 m-auto h-72 w-72 rounded-full bg-secondary/20 blur-[110px]" />
          <img
            src={FRUITS}
            alt="Тайские фрукты: мангостин, рамбутан, питахайя"
            className="animate-float relative w-[26rem] max-w-full rounded-3xl border border-white/10 glow-orange"
          />
        </div>

        <h1 className="animate-pop-in font-display text-4xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Тайские фрукты — прямо из <span className="text-primary text-glow-orange">Бангкока</span> во <span className="text-secondary">Владивосток</span>
        </h1>

        <p className="animate-pop-in mt-6 max-w-2xl text-base text-muted-foreground md:text-xl" style={{ animationDelay: '0.1s' }}>
          Манго, мангостин, рамбутан, питахайя — привозим авиарейсом каждую неделю. Свежие, спелые, как будто вы сами в Таиланде.
        </p>

        <div className="animate-pop-in mt-10" style={{ animationDelay: '0.2s' }}>
          <Button
            size="lg"
            className="glow-orange h-14 rounded-full px-10 text-lg font-bold uppercase tracking-wide transition hover:scale-105"
          >
            🛒 Заказать сейчас
          </Button>
        </div>

        <div className="animate-pop-in mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground" style={{ animationDelay: '0.3s' }}>
          <span className="flex items-center gap-1.5">✈️ Поставка каждую неделю</span>
          <span className="hidden text-border md:inline">·</span>
          <span className="flex items-center gap-1.5">🌿 Без химии и дозревания</span>
          <span className="hidden text-border md:inline">·</span>
          <span className="flex items-center gap-1.5">📦 Доставка по Владивостоку за 1–2 часа</span>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-5xl">
            Вы пробовали настоящий мангостин прямо с рынка <span className="text-primary text-glow-orange">Пхукета</span>?
          </h2>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
            В магазинах Владивостока — либо нет вообще, либо что-то зелёное и безвкусное, дозревшее где-то в морозилке. Это не Таиланд.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Мы привозим спелые тропические фрукты авиарейсом — без длинной логистической цепочки, без химии для «дозревания в дороге». Вы получаете именно тот вкус, который помните с отдыха.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            { emoji: '🏝️', title: 'Отбираем на фермах', desc: 'Только спелые, вручную' },
            { emoji: '✈️', title: 'Летит самолётом', desc: 'Из Бангкока во Владик' },
            { emoji: '🚗', title: 'Доставляем за 2 часа', desc: 'Прямо к вашей двери' },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-border bg-card p-8 text-center transition hover:-translate-y-1.5 hover:border-primary/50 hover:glow-orange"
            >
              <div className="text-5xl transition group-hover:scale-110">{item.emoji}</div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <h2 className="text-center font-display text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
          Что привезли на <span className="text-primary text-glow-orange">этой неделе</span>
        </h2>

        <Carousel opts={{ align: 'start', loop: true }} className="mx-auto mt-14 max-w-6xl px-12">
          <CarouselContent className="-ml-7">
            {PRODUCTS.map((p) => (
              <CarouselItem key={p.name} className="pl-7 md:basis-1/2 lg:basis-1/3">
                <div
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-2"
                  style={{ boxShadow: `0 0 0 1px transparent` }}
                >
                  <div className="relative overflow-hidden">
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
                      style={{ background: `radial-gradient(circle at 50% 50%, hsl(${p.accent} / 0.25), transparent 70%)` }}
                    />
                    {p.hoverImg ? (
                      <BeforeAfterSlider
                        before={p.img}
                        after={p.hoverImg}
                        beforeAlt={p.name}
                        afterAlt={`${p.name} в разрезе`}
                      />
                    ) : (
                      <img
                        src={p.img}
                        alt={p.name}
                        className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    )}
                    <span
                      className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${p.inStock ? 'bg-secondary text-secondary-foreground' : 'bg-primary text-primary-foreground'}`}
                    >
                      {p.stockLabel}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-bold text-foreground">
                      {p.emoji} {p.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.subtitle}</p>

                    <div className="mt-4 flex items-end justify-between">
                      <span className="text-sm font-medium text-muted-foreground">{p.weight}</span>
                      <span className="font-display text-2xl font-bold text-primary">{p.price}</span>
                    </div>

                    <Button className="mt-5 w-full rounded-full font-bold uppercase tracking-wide transition hover:scale-[1.03] hover:glow-orange">
                      <Icon name="Plus" size={18} className="mr-1" /> Добавить в заказ
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-primary/50 bg-card text-primary hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="border-primary/50 bg-card text-primary hover:bg-primary hover:text-primary-foreground" />
        </Carousel>

        <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center gap-5 rounded-2xl border border-secondary/30 bg-secondary/5 p-8 text-center">
          <p className="text-base text-muted-foreground md:text-lg">
            🔄 Ассортимент обновляется каждую неделю — подпишитесь в Telegram, чтобы узнавать первыми
          </p>
          <Button
            size="lg"
            variant="outline"
            className="glow-green rounded-full border-secondary/60 px-8 font-bold text-secondary hover:bg-secondary hover:text-secondary-foreground"
          >
            <Icon name="Send" size={18} className="mr-2" /> Подписаться на канал
          </Button>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <h2 className="text-center font-display text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
          Что говорят те, кто уже <span className="text-primary text-glow-orange">пробовал</span>
        </h2>

        <div className="mx-auto mt-14 grid max-w-6xl gap-7 md:grid-cols-3">
          {[
            {
              img: 'https://cdn.poehali.dev/projects/2b19800d-1a03-4ba4-a8f9-d77388d88a2b/files/c568f752-c06f-4ef9-a04e-65cb09a0b163.jpg',
              name: 'Анна Р.',
              role: 'менеджер, 34 года',
              text: 'Заказала мангостины — это вообще не сравнить с тем, что продаётся в супермаркетах. Привезли за полтора часа, всё было в идеальном состоянии. Теперь беру каждую неделю.',
            },
            {
              img: 'https://cdn.poehali.dev/projects/2b19800d-1a03-4ba4-a8f9-d77388d88a2b/files/33a70fbf-5a27-478a-b753-660a0b024528.jpg',
              name: 'Михаил К.',
              role: 'предприниматель',
              text: 'Взял набор для офиса на корпоратив — все были в восторге. Никто не видел живого рамбутана. Рекомендую, реально свежее.',
            },
            {
              img: 'https://cdn.poehali.dev/projects/2b19800d-1a03-4ba4-a8f9-d77388d88a2b/files/d9c2be8b-d714-47ba-94d2-64d8227ffc0b.jpg',
              name: 'Ольга Т.',
              role: '41 год',
              text: 'Муж только вернулся из Паттайи и говорит — вкус такой же! Будем заказывать постоянно.',
            },
          ].map((review) => (
            <div
              key={review.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition hover:-translate-y-1.5 hover:border-primary/40"
            >
              <div className="flex items-center gap-4">
                <img
                  src={review.img}
                  alt={review.name}
                  className="h-14 w-14 rounded-full border-2 border-primary/50 object-cover"
                />
                <div>
                  <p className="font-bold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </div>
              <div className="mt-4 flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="Star" size={18} className="fill-primary" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">«{review.text}»</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-3">
          {[
            { icon: '🛒', value: '200+ заказов', label: 'за первые 3 месяца' },
            { icon: '✈️', value: 'Еженедельные поставки', label: 'прямо из Бангкока' },
            { icon: '⭐', value: '4.9 из 5', label: 'средняя оценка' },
          ].map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="text-3xl">{stat.icon}</div>
              <p className="mt-2 font-display text-2xl font-bold text-secondary">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <h2 className="text-center font-display text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
          Видео-<span className="text-primary text-glow-orange">отзывы</span>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-muted-foreground">
          Реальные эмоции наших клиентов от тайских фруктов
        </p>

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setLightbox(true)}
            className="group glow-orange relative aspect-[9/16] w-64 overflow-hidden rounded-3xl border border-white/10 transition hover:-translate-y-1.5"
          >
            <video
              src="https://cdn.poehali.dev/projects/2b19800d-1a03-4ba4-a8f9-d77388d88a2b/bucket/fa2438e5-81df-40b6-9d20-9db33cf19110.mp4#t=0.5"
              muted
              playsInline
              preload="metadata"
              className="h-full w-full bg-card object-cover"
            />
            <div className="absolute inset-0 bg-background/30 transition group-hover:bg-background/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition group-hover:scale-110">
                <Icon name="Play" size={28} className="ml-1 fill-current" />
              </span>
            </div>
          </button>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(false)}
        >
          <button
            onClick={() => setLightbox(false)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-foreground transition hover:bg-white/20"
          >
            <Icon name="X" size={22} />
          </button>
          <video
            src="https://cdn.poehali.dev/projects/2b19800d-1a03-4ba4-a8f9-d77388d88a2b/bucket/fa2438e5-81df-40b6-9d20-9db33cf19110.mp4"
            controls
            autoPlay
            playsInline
            onClick={(e) => e.stopPropagation()}
            className="aspect-[9/16] max-h-[88vh] w-auto rounded-2xl border border-white/10 glow-orange"
          />
        </div>
      )}

      <section className="container py-20 md:py-28">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] p-8 md:p-14">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/70 to-primary" />
          <div className="absolute inset-0 bg-background/20" />

          <div className="relative text-center text-white">
            <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
              Хотите попробовать? Оставьте заявку — мы привезём сегодня
            </h2>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-background/30 px-5 py-2 text-sm font-semibold backdrop-blur-sm">
              ⏰ Следующая поставка — в пятницу. Успейте заказать до четверга 20:00
            </div>

            {sent ? (
              <div className="mx-auto mt-10 max-w-md rounded-2xl bg-white/15 p-8 backdrop-blur-md">
                <div className="text-5xl">🍑</div>
                <p className="mt-4 text-xl font-bold">Спасибо, {name}!</p>
                <p className="mt-2 text-white/90">Перезвоним вам в течение 15 минут.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="mx-auto mt-10 flex max-w-md flex-col gap-4">
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше имя"
                  required
                  className="h-14 rounded-full border-white/30 bg-white/15 px-6 text-base text-white placeholder:text-white/70 backdrop-blur-sm focus-visible:ring-white"
                />
                <Input
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Номер телефона / Telegram"
                  required
                  className="h-14 rounded-full border-white/30 bg-white/15 px-6 text-base text-white placeholder:text-white/70 backdrop-blur-sm focus-visible:ring-white"
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="h-14 rounded-full bg-white text-base font-bold uppercase tracking-wide text-primary transition hover:scale-[1.03] hover:bg-white disabled:opacity-70"
                >
                  {loading ? 'Отправляем…' : '🍑 Хочу попробовать — позвоните мне'}
                </Button>
                {error && <p className="text-center text-sm text-white">{error}</p>}
              </form>
            )}

            <p className="mx-auto mt-6 max-w-md text-sm text-white/90">
              Перезвоним за 15 минут · Доставка по Владивостоку · Оплата при получении или онлайн
            </p>
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <h2 className="text-center font-display text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
          Частые <span className="text-primary text-glow-orange">вопросы</span>
        </h2>

        <Accordion type="single" collapsible className="mx-auto mt-12 max-w-3xl space-y-4">
          {[
            {
              q: 'Как часто бывают поставки?',
              a: 'Каждую неделю авиарейсом из Бангкока. Точные даты публикуем в Telegram-канале.',
            },
            {
              q: 'А фрукты точно свежие, не переспелые?',
              a: 'Мы отбираем плоды на рынках Таиланда за 24 часа до отправки. Срок от фермы до вашего стола — 2–3 дня.',
            },
            {
              q: 'Можно заказать не всё, а только один вид?',
              a: 'Да! Минимальный заказ — одна позиция от 300 г. Или готовый набор — попробовать всего понемногу.',
            },
            {
              q: 'Какая доставка по Владивостоку?',
              a: 'Доставка по городу 150–200 ₽, либо бесплатно при заказе от 2000 ₽.',
            },
            {
              q: 'Как узнавать о новых поставках первым?',
              a: 'Подписывайтесь на Telegram-канал — там объявляем ассортимент и цены каждую неделю.',
            },
          ].map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-6 data-[state=open]:border-primary/40"
            >
              <AccordionTrigger className="py-5 text-left text-base font-bold text-foreground hover:no-underline md:text-lg">
                <span className="flex items-center gap-2">❓ {item.q}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="container pb-20 md:pb-28">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-secondary/30 bg-secondary/10 p-8 text-center md:p-14">
          <div className="text-5xl">📲</div>
          <h2 className="mt-5 font-display text-2xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-4xl">
            Подпишитесь на канал — и получите скидку <span className="text-secondary">10%</span> на первый заказ
          </h2>
          <Button
            asChild
            size="lg"
            className="glow-green mt-8 h-14 rounded-full bg-secondary px-10 text-base font-bold uppercase tracking-wide text-secondary-foreground transition hover:scale-105 hover:bg-secondary"
          >
            <a href="https://t.me/Keranos1st" target="_blank" rel="noopener noreferrer">
              <Icon name="Send" size={20} className="mr-2" /> Подписаться в Telegram
            </a>
          </Button>
        </div>
      </section>

      <footer className="container border-t border-border py-10 text-center text-sm text-muted-foreground">
        <p className="font-display text-lg text-foreground">🥭 Тайские фрукты во Владивостоке</p>
        <p className="mt-2">Свежие тропические фрукты прямо из Бангкока · © 2025</p>
        <a
          href="https://t.me/Keranos1st"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-secondary/15 px-5 py-2 font-semibold text-secondary transition hover:bg-secondary/25"
        >
          <Icon name="Send" size={18} /> @Keranos1st
        </a>
        <div className="mx-auto mt-6 max-w-2xl space-y-1 border-t border-border/50 pt-6 text-xs text-muted-foreground/80">
          <p>ИП Черников Сергей Николаевич. ИНН 250ХХХХХХХХХ, ОГРНИП 32Х25ХХХХХХХХХХ.</p>
          <p>Юридический адрес: г. Владивосток, Приморский край, РФ.</p>
          <p>Все материалы сайта являются информационными и не являются публичной офертой.</p>
          <p>© ChernikovGPT / Hakni Neurosets, 2026.</p>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Index;