let menu = {
  _courses: {
        appetizers: [],
        mains: [],
        desserts:[],
    },

    get appetizers() {
        return this._courses.appetizers;
    },

    set appetizers(appetizer){
        this._courses.appetizers = appetizer;
    },

    get mains() {
        return this._courses.mains;
    },

    set mains(main){
        this._courses.mains = mains;
    },

    get desserts() {
        return this._courses.desserts;
    },

    set desserts(dessert){
        this._courses.desserts = desserts;
    },  

    get courses() {
            return {appetizers: this._courses.appetizers, mains: this._courses.mains, desserts: this._courses.desserts };
    },

    addDishToCourse(courseName, dishName, dishPrice){
        let dish = {
            name: dishName,
            price: dishPrice
        };

        this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName){
      let dishes = this._courses[courseName];
      const rnd = Math.floor(Math.random() * dishes.length);

      return dishes[rnd];
    },

    generateRandomMeal(){
        let appetizer = this.getRandomDishFromCourse('appetizers');
        let mains = this.getRandomDishFromCourse('mains');
        let desserts = this.getRandomDishFromCourse('desserts');
        let price = appetizer.price + mains.price + desserts.price;

        return 'Dein Gericht ist: ' + appetizer.name + ', ' + mains.name + ', ' + desserts.name + '. Der Preis ist: ' + price;
    }
};

menu.addDishToCourse('appetizers', 'Caesar Salat', 4.25);
menu.addDishToCourse('mains', 'Maultaschen', 8.70);
menu.addDishToCourse('desserts', 'Tiramisu', 5.00);

menu.addDishToCourse('appetizers', 'Salat', 2.50);
menu.addDishToCourse('mains', 'Schnitzel', 14.80);
menu.addDishToCourse('desserts', 'Kaiserschmarn', 6.80);

menu.addDishToCourse('appetizers', 'Tomatensuppe', 6.30);
menu.addDishToCourse('mains', 'Kalbs Rouge', 15.70);
menu.addDishToCourse('desserts', 'Eisbecher', 4.30);

console.log(menu.generateRandomMeal());