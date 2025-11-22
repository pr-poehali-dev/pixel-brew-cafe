import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [score] = useState(9990);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { id: 'drinks', name: '☕ НАПИТКИ', emoji: '☕' },
    { id: 'food', name: '🍰 ЕДА', emoji: '🍰' },
    { id: 'about', name: '📖 ИСТОРИЯ', emoji: '📖' },
    { id: 'events', name: '🎯 СОБЫТИЯ', emoji: '🎯' },
  ];

  const drinks = [
    { name: 'Зелье Здоровья', subtitle: 'Эспрессо', icon: '♥️', hearts: 3, color: 'bg-red-600' },
    { name: 'Эликсир Маны', subtitle: 'Латте', icon: '🔵', hearts: 3, color: 'bg-pixel-blue' },
    { name: 'Ускорение', subtitle: 'Американо', icon: '⚡', hearts: 3, color: 'bg-pixel-yellow' },
    { name: 'Критический Удар', subtitle: 'Капучино', icon: '💥', hearts: 3, color: 'bg-pixel-orange' },
  ];

  const food = [
    { name: 'Усиление Силы', subtitle: 'Маффин', icon: '⬆️', color: 'bg-pixel-green' },
    { name: 'Дополнительная Жизнь', subtitle: 'Чизкейк', icon: '🍰', color: 'bg-pixel-pink' },
    { name: 'Битва с Боссом', subtitle: 'Торт', icon: '🎂', color: 'bg-pixel-purple' },
  ];

  const events = [
    { name: 'Ретро Турниры', icon: '🎮', day: 'Каждую Неделю' },
    { name: 'NES Вечер', icon: '🕹️', day: 'Четверг' },
    { name: 'Косплей Суббота', icon: '🎪', day: 'Суббота' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      {activeSection === 'home' && (
        <div className="max-w-4xl mx-auto">
          <div className="border-4 border-primary p-8 mb-8 bg-card animate-pulse-slow">
            <div className="text-center space-y-6">
              <div className="text-xs md:text-sm text-pixel-purple animate-blink">
                ═══════════════════════════
              </div>
              <h1 className="text-2xl md:text-4xl text-pixel-purple tracking-wider animate-pixel-bounce">
                PIXEL BREW
              </h1>
              <p className="text-xs md:text-sm text-pixel-pink">
                Каждый байт восхитителен!
              </p>
              <div className="text-xs md:text-sm text-pixel-purple animate-blink">
                ═══════════════════════════
              </div>
              <Button
                onClick={() => setActiveSection('drinks')}
                className="bg-pixel-purple hover:bg-pixel-pink text-foreground font-bold px-8 py-6 text-lg border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-all"
              >
                ⚡ НАЧАТЬ ИГРУ ⚡
              </Button>
              <div className="text-xs md:text-sm text-pixel-orange mt-6">
                ═══════════════════════════
              </div>
              <div className="text-sm md:text-base text-pixel-yellow">
                Рекорд: {score} ☕
              </div>
              <div className="text-xs md:text-sm text-pixel-orange">
                ═══════════════════════════
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {menuItems.map((item) => (
              <Card
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className="p-4 bg-card border-4 border-primary hover:border-pixel-pink cursor-pointer transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_hsl(var(--primary))]"
              >
                <div className="text-center space-y-2">
                  <div className="text-3xl animate-pixel-bounce">{item.emoji}</div>
                  <div className="text-xs">{item.name}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'drinks' && (
        <div className="max-w-4xl mx-auto">
          <div className="border-4 border-primary p-6 mb-8 bg-card">
            <div className="flex items-center justify-between mb-6">
              <Button
                onClick={() => setActiveSection('home')}
                className="bg-muted hover:bg-pixel-orange text-foreground border-2 border-foreground"
              >
                ← НАЗАД
              </Button>
              <h2 className="text-xl md:text-2xl text-pixel-purple">☕ ИНВЕНТАРЬ</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {drinks.map((drink, idx) => (
                <Card
                  key={idx}
                  className="p-6 bg-muted border-4 border-primary hover:border-pixel-yellow cursor-pointer transition-all group"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <div className="text-sm md:text-base font-bold text-foreground">
                        {drink.name}
                      </div>
                      <div className="text-xs text-muted-foreground">{drink.subtitle}</div>
                      <div className="flex gap-1">
                        {[...Array(drink.hearts)].map((_, i) => (
                          <span key={i} className="text-red-500">
                            {drink.icon}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div
                      className={`w-12 h-12 ${drink.color} border-2 border-foreground flex items-center justify-center text-2xl group-hover:animate-pixel-bounce`}
                    >
                      {drink.icon}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeSection === 'food' && (
        <div className="max-w-4xl mx-auto">
          <div className="border-4 border-primary p-6 mb-8 bg-card">
            <div className="flex items-center justify-between mb-6">
              <Button
                onClick={() => setActiveSection('home')}
                className="bg-muted hover:bg-pixel-orange text-foreground border-2 border-foreground"
              >
                ← НАЗАД
              </Button>
              <h2 className="text-xl md:text-2xl text-pixel-green">🍰 УСИЛЕНИЯ</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {food.map((item, idx) => (
                <Card
                  key={idx}
                  className="p-6 bg-muted border-4 border-primary hover:border-pixel-green cursor-pointer transition-all group"
                >
                  <div className="text-center space-y-4">
                    <div
                      className={`w-16 h-16 ${item.color} border-2 border-foreground flex items-center justify-center text-3xl mx-auto group-hover:animate-pixel-bounce`}
                    >
                      {item.icon}
                    </div>
                    <div className="text-sm md:text-base font-bold">{item.name}</div>
                    <div className="text-xs text-muted-foreground">{item.subtitle}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeSection === 'about' && (
        <div className="max-w-4xl mx-auto">
          <div className="border-4 border-primary p-6 mb-8 bg-card">
            <div className="flex items-center justify-between mb-6">
              <Button
                onClick={() => setActiveSection('home')}
                className="bg-muted hover:bg-pixel-orange text-foreground border-2 border-foreground"
              >
                ← НАЗАД
              </Button>
              <h2 className="text-xl md:text-2xl text-pixel-blue">📖 ПРЕДЫСТОРИЯ</h2>
            </div>

            <Card className="p-8 bg-muted border-4 border-pixel-blue space-y-4">
              <div className="text-xs md:text-sm leading-relaxed">
                <p className="mb-4">
                  &gt; Загрузка истории...
                  <span className="animate-blink">_</span>
                </p>
                <p className="mb-4">
                  В далеком 1992 году два геймера решили создать идеальное место для таких же
                  фанатов ретро-игр...
                </p>
                <p className="mb-4">
                  Здесь вы найдете легендарные консоли: NES, Sega, PlayStation и множество других!
                </p>
                <p className="text-pixel-yellow">
                  🎮 Наша миссия: объединить любителей классических игр за чашкой отличного кофе!
                </p>
              </div>
            </Card>
          </div>
        </div>
      )}

      {activeSection === 'events' && (
        <div className="max-w-4xl mx-auto">
          <div className="border-4 border-primary p-6 mb-8 bg-card">
            <div className="flex items-center justify-between mb-6">
              <Button
                onClick={() => setActiveSection('home')}
                className="bg-muted hover:bg-pixel-orange text-foreground border-2 border-foreground"
              >
                ← НАЗАД
              </Button>
              <h2 className="text-xl md:text-2xl text-pixel-orange">🎯 КВЕСТЫ</h2>
            </div>

            <div className="space-y-4">
              {events.map((event, idx) => (
                <Card
                  key={idx}
                  className="p-6 bg-muted border-4 border-primary hover:border-pixel-orange cursor-pointer transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl group-hover:animate-pixel-bounce">{event.icon}</div>
                      <div>
                        <div className="text-sm md:text-base font-bold">{event.name}</div>
                        <div className="text-xs text-pixel-yellow">{event.day}</div>
                      </div>
                    </div>
                    <div className="text-pixel-green text-sm">→ УЧАСТВОВАТЬ</div>
                  </div>
                </Card>
              ))}

              <Card className="p-6 bg-pixel-purple border-4 border-pixel-yellow">
                <div className="text-center space-y-2">
                  <div className="text-lg animate-blink">🎁 СЕКРЕТНЫЙ КОД 🎁</div>
                  <div className="text-xs">Введи код: PIXEL2025</div>
                  <div className="text-sm text-pixel-yellow">Скидка 15%!</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-4 right-4 bg-card border-4 border-primary p-3 text-xs animate-blink">
        💾 АВТОСОХРАНЕНО
      </div>
    </div>
  );
};

export default Index;