function Person(name) {
this.name = name;
this.face =  "😐";
// const pin = L.marker(latLng, L.divIcon({ html: emojiImg }));
// var marker = L.marker([51.5, -0.09]).addTo(map);
this.times = [[51.5, -0.09], [51.509, -0.08], [51.51, -0.047], [51.508, -0.11]];
this.caution = 50;
this.wallet = 0;
}

function Company(name, logo) {
this.name = name;
this.logo = logo;
this.income = 100;
this.salary = 50;
this.employees = [];
}

bob = new Person("bob")

acme = new Company("acme corp", "👔")

console.log(acme)
acme.employees.push(bob)

console.log(acme.employees)

console.log(bob.name)
console.log(bob.caution)
bob.caution += 10
console.log(bob.caution)
console.log(acme.employees)
