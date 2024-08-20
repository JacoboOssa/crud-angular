import { Component } from '@angular/core';

export class Student {
    id: string;
    name: string;
    country: string;

    constructor(id: string, name: string, country: string) {
        this.id = id;
        this.name = name;
        this.country = country;
      }
}


