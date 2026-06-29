import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const FRUITS = 'https://cdn.poehali.dev/projects/2b19800d-1a03-4ba4-a8f9-d77388d88a2b/files/3b3a36ba-5712-449c-a4bd-bcd88bc22433.jpg';

const PRODUCTS = [
  {
    img: 'https://cdn.poehali.dev/projects/2b19800d-1a03-4ba4-a8f9-d77388d88a2b/files/239cd101-d4f1-4a6e-96fc-cb2beccf6617.jpg',
    emoji: '🟣',
    name: 'Мангостин',
    subtitle: '«Королева тропиков»',
    weight: '500 г',
    price: '790 ₽',
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
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background tropic-bg overflow-x-hidden">
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

        <div className="mx-auto mt-14 grid max-w-6xl gap-7 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <div
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-2"
              style={{ boxShadow: `0 0 0 1px transparent` }}
            >
              <div className="relative overflow-hidden">
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
                  style={{ background: `radial-gradient(circle at 50% 50%, hsl(${p.accent} / 0.25), transparent 70%)` }}
                />
                <img
                  src={p.img}
                  alt={p.name}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                />
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
          ))}
        </div>

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
    </div>
  );
};

export default Index;