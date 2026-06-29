import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_CAT = 'https://cdn.poehali.dev/projects/2b19800d-1a03-4ba4-a8f9-d77388d88a2b/files/c9be2685-f320-4d6a-b7b1-9fa3939a00dd.jpg';
const YARN_CAT = 'https://cdn.poehali.dev/projects/2b19800d-1a03-4ba4-a8f9-d77388d88a2b/files/9da589a5-8b8f-4db2-b124-c6eae6850be2.jpg';

const games = [
  { icon: 'Mouse', title: 'Поймай мышку', desc: 'Классика для каждого котика', color: 'bg-primary' },
  { icon: 'CircleDot', title: 'Клубок ниток', desc: 'Запутайся в удовольствие', color: 'bg-secondary' },
  { icon: 'Sparkles', title: 'Лазерная точка', desc: 'Бесконечное веселье', color: 'bg-accent' },
];

const Index = () => {
  const [score, setScore] = useState(0);

  return (
    <div className="min-h-screen paw-bg overflow-x-hidden">
      <header className="container flex items-center justify-between py-6">
        <div className="flex items-center gap-2">
          <span className="text-4xl animate-wiggle">🐱</span>
          <span className="font-display text-2xl text-primary">Котики</span>
        </div>
        <nav className="hidden gap-8 font-bold text-foreground/70 sm:flex">
          <a href="#games" className="transition hover:text-primary">Игры</a>
          <a href="#contacts" className="transition hover:text-primary">Контакты</a>
        </nav>
      </header>

      <section className="container grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-20">
        <div className="animate-pop-in text-center lg:text-left">
          <span className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-1 font-bold text-secondary">
            Мур-мур приветствует тебя!
          </span>
          <h1 className="font-display text-5xl leading-tight text-foreground md:text-6xl lg:text-7xl">
            Мир милых <span className="text-primary">котиков</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg text-muted-foreground lg:mx-0">
            Самое уютное место в интернете. Играй, улыбайся и заряжайся мурлыкающим позитивом!
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Button
              size="lg"
              className="rounded-full px-8 text-lg font-bold shadow-lg shadow-primary/30 hover:scale-105"
              onClick={() => setScore((s) => s + 1)}
            >
              <Icon name="Heart" className="mr-2" /> Погладить котика
            </Button>
            <a href="#games">
              <Button size="lg" variant="outline" className="rounded-full px-8 text-lg font-bold hover:scale-105">
                Хочу играть
              </Button>
            </a>
          </div>
          {score > 0 && (
            <p className="mt-4 font-bold text-secondary animate-pop-in">
              Котик доволен! Поглажен {score} раз 🥰
            </p>
          )}
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-0 m-auto h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <img
            src={HERO_CAT}
            alt="Милый котик"
            className="relative w-80 max-w-full animate-float rounded-[2.5rem] border-4 border-white shadow-2xl"
          />
        </div>
      </section>

      <section id="games" className="container py-16">
        <h2 className="text-center font-display text-4xl text-foreground md:text-5xl">Игры с котиками</h2>
        <p className="mx-auto mt-3 max-w-md text-center text-muted-foreground">
          Выбирай развлечение и проводи время весело вместе с пушистиками
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {games.map((g, i) => (
            <div
              key={g.title}
              className="animate-pop-in rounded-[2rem] border-2 border-border bg-card p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${g.color} text-white shadow-lg`}>
                <Icon name={g.icon} size={32} />
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-foreground">{g.title}</h3>
              <p className="mt-2 text-muted-foreground">{g.desc}</p>
              <Button variant="ghost" className="mt-4 rounded-full font-bold text-primary hover:bg-primary/10">
                Играть →
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section id="contacts" className="container py-16">
        <div className="grid items-center gap-10 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-secondary p-8 text-white shadow-2xl md:grid-cols-2 md:p-12">
          <div>
            <h2 className="font-display text-4xl md:text-5xl">Напиши нам мяу!</h2>
            <p className="mt-4 max-w-sm text-white/90">
              Хочешь поделиться фото своего котика или просто поболтать? Мы всегда на связи!
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                  <Icon name="Mail" />
                </span>
                <span className="font-bold">privet@kotiki.ru</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                  <Icon name="Phone" />
                </span>
                <span className="font-bold">+7 (900) 000-00-00</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                  <Icon name="MapPin" />
                </span>
                <span className="font-bold">Котоград, ул. Мурлыкина, 1</span>
              </div>
            </div>
            <Button size="lg" className="mt-8 rounded-full bg-white px-8 font-bold text-primary hover:scale-105 hover:bg-white">
              <Icon name="Send" className="mr-2" /> Написать
            </Button>
          </div>
          <img
            src={YARN_CAT}
            alt="Котик с клубком"
            className="mx-auto w-64 animate-float rounded-[2rem] border-4 border-white/40 shadow-xl"
          />
        </div>
      </section>

      <footer className="container py-10 text-center text-muted-foreground">
        <p className="font-bold">🐾 Сделано с любовью к котикам</p>
      </footer>
    </div>
  );
};

export default Index;
