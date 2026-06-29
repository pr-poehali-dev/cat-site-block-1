import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const FRUITS = 'https://cdn.poehali.dev/projects/2b19800d-1a03-4ba4-a8f9-d77388d88a2b/files/3b3a36ba-5712-449c-a4bd-bcd88bc22433.jpg';

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
    </div>
  );
};

export default Index;
