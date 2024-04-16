function Person(name) {
this.name = name;
this.face =  "😐";
/*interests = {
    "family":0,
    "friends":0,
    "pets":0,
    "politics":0,
    "sports":0,
    "dating":0,
    "church":0,
    "career":0,
    },*/
this.caution = 50;
this.employer = 0;
}

bob = new Person("bob")
console.log(bob.name)
console.log(bob.caution)
bob.caution += 10
console.log(bob.caution)
