"use strict";
class ConsoleLogger {
    log(param) {
        console.log('log1', param);
    }
    ;
}
class ConsoleLogger2 {
    log(param) {
        console.log('log2', param);
    }
    ;
}
class ExampleDataBase {
    constructor(log = new ConsoleLogger()) {
        this.log = log;
    }
    save(key, Value) {
        this.log.log(`Salvando valor ${Value} na chave ${key}`);
    }
}
const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();
const database1 = new ExampleDataBase(logger1);
const database2 = new ExampleDataBase(logger2);
const database3 = new ExampleDataBase();
database1.save('chave 1', 'valor 1');
database1.save('chave 2', 'valor 2');
database1.save('chave 3', 'valor 3');
