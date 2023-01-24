# Домашнее задание к лекции «`Math`, `RegExp`, `ArrayBuffer`»

### **Важные моменты** 

1. Каждая задача выполняется в виде отдельного проекта с собственным GitHub-репозиторием.
2. Код должен проходить ESLint без ошибок.
3. Тесты должны обеспечивать 100-процентное покрытие тестируемых функций по строкам.
4. Решения должны быть построены на базе [шаблона webpack](/ci-template).

В личном кабинете на сайте [netology.ru](http://netology.ru/) в поле комментария к домашней работе добавьте ссылки на ваши GitHub-проекты.

---

## `Math (log/trig)`

### Легенда

Мощь атаки магов и демонов привела к разбалансировке игрового мира. Поэтому вы ввели для игроков новые правила и возможности:
1. Сила урона зависит от расстояния. Для `Magician` и `Daemon` она падает линейно: на ближайшую клетку 100 %, на пятую клетку от себя — 60 %, на вторую клетку — 90 %, на третью — 80 %, на четвёртую — 70 %.
2. Возможность насылать «дурман» на магов и демонов. При этом сила их атаки падает уже не только линейно, а по формуле: `attack — log2(x) * 5`, где `x` — это расстояние в клетках. `attack` рассчитывается с учётом п. 1. 
 
Пример: атака в 100 единиц, атакуем вторую клетку от себя, получаем вместе с дурманом 85 вместо 90.

### Описание

Реализуйте классы `Magician` и `Daemon` с `get/set stoned`. При этом `get/set attack` должен учитывать логику, описанную в легенде.

Подсказка: используйте класс `Math` и наследование, чтобы не дублировать код.

Не забудьте написать Unit-тесты, которые обеспечивают 100-процентное покрытие тестируемых функций и классов.

---

## `RegExp`

### Легенда

Вы проанализировали логи вашей игры и заметили, что многие пользователи используют «мусорные» логины и непонятные символы не только в никнеймах, но и в именах. Нужно с этим что-то делать! 

### Описание

Реализуйте класс `Validator` с методом `validateUsername`, который проверяет имя пользователя с помощью регулярных выражений на соответствие правилам:
1. Допустимы только латинские буквы, символы тире `-`, подчёркивания `_` и цифры 0–9.
2. Имя не должно содержать более трёх цифр подряд, начинаться и заканчиваться цифрами, подчёркиванием или тире.

Не забудьте написать Unit-тесты, которые обеспечивают 100-процентное покрытие тестируемых функций и классов.

---

## `ArrayBuffer` * (задача со звёздочкой)

**Важно: это необязательная задача.**

### Легенда

Периодически данные приходят в бинарном формате, и их необходимо преобразовать в другой формат, например, строку JSON, чтобы потом распарсить в объект. Для этих манипуляций можно использовать объекты, которые предоставляются Web API — `File` и `Blob`, но прямая манипуляция `ArrayBuffer` будет в разы быстрее и эффективнее.

### Описание

У вас есть функция `getBuffer()`, которая эмулирует создание объекта типа `ArrayBuffer`. Вам необходимо реализовать класс `ArrayBufferConverter` с методом `load()`, который может загружать данные (сигнатура `load(buffer)`), и методом `toString`, который умеет переводить содержимое загруженного `ArrayBuffer` в строку.
```javascript
function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return (input => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}
```

Не забудьте написать Unit-тесты, которые обеспечивают 100-процентное покрытие тестируемых функций и классов.

---