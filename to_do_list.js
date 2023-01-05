const todoList = {
  items: [
    {
      text: "Завершить текущий челлендж",
      completed: false,
    },
    {
      text: "Отдохнуть во время перерыва",
      completed: false,
    },
    {
      text: "Помочь напарнику понять код",
      completed: false,
    },
    {
      text: "Выиграть в мафию",
      completed: true,
    },
  ],

  printAll: function () {
    for (let i = 0; i < this.items.length; i++) {
      todoList.print(i);
    }
  },

  add: function (text) {
    this.items.unshift({ text, completed: false });
  },

  remove: function (index) {
    this.items.splice(0, index);
  },

  print: function (index) {
    if (this.items[index].completed === true) {
     return console.log(`[x] ${this.items[index].text}`);
    }
    return console.log(`[ ] ${this.items[index].text}`);
  },

  complete: function (index) {
    this.items[index].completed = true
  },
};
//   todoList.add('Перейти к следующиму релизу')
todoList.complete(0);
//   todoList.remove(1)
todoList.printAll();
