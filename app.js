const App = {
    data: () => ({
        title: 'Список моих дел',
        inputText: '',
        items: [
            {
                name: 'Посмотреть, что такое Vue.js',
                crossed: true
            },
            {
                name: 'Потыкаться во Vue.js',
                crossed: true
            },
            {
                name: 'Загуглить тысячу и одну ошибку',
                crossed: true
            }, 
            {
                name: 'Сделать приложение, которое делают все',
                crossed: true
            },
            {
                name: 'Запушить на гитхаб',
                crossed: false
            }
        ]
    }),
    methods: {
        cross(item, index) {
            let newVal = {
                name: item.name,
                crossed: !item.crossed
            };
            this.items.splice(index, 1, newVal);
        },
        deleteItem(index) {
            this.items.splice(index, 1)
        },
        addItem() {
            this.items.push({
                name: this.inputText,
                crossed: false
            });
            this.inputText = ''
        }
    },
};

var app = Vue.createApp(App).mount('#app')