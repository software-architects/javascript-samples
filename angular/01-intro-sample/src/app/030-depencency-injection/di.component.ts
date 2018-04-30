import { Component, Injectable, Inject, OpaqueToken, ReflectiveInjector, Optional } from '@angular/core';

// Note that we use an opaque token here. We need that because
// PRIORITY is not a class. For details see
// https://angular.io/docs/ts/latest/api/core/index/OpaqueToken-class.html
const PRIORITY = new OpaqueToken('priority');

// Note the use of Injectable here. It marks a class as available to an
// injector for instantiation. Best practice: Add Injectable to every
// service class to be ready for injection. For details see
// https://angular.io/docs/ts/latest/api/core/index/Injectable-decorator.html
@Injectable()
export class Logger {
    public log(message: string) {
        console.log(message);
    }
}

// Define an interface to make sure that all mail builders follow the same contract.
export interface IMailBuilder {
    SendMessage(to: string, message: string): void;
}

@Injectable()
export class MailBuilder implements IMailBuilder {
    // Note the use inject metadata so that Angular does not do DI based on
    // the type of the parameter. For details see
    // https://angular.io/docs/ts/latest/api/core/index/Inject-var.html
    constructor( @Inject(PRIORITY) private priority: string, private logger: Logger) { }

    public SendMessage(to: string, message: string) {
        this.logger.log('Sending message...');
        console.log(`Sending ${message} to ${to} with priority ${this.priority}`);
    }
}

@Injectable()
export class MailBuilderMock implements IMailBuilder {
    // Note the optional constructor parameter. For details see
    // https://angular.io/docs/ts/latest/api/core/index/Optional-var.html
    constructor( @Optional() private logger: Logger) { }

    public SendMessage(_: string, __: string) {
        if (this.logger) {
            this.logger.log('Mock object called...');
        }

        console.log('Just a mock object...');
    }
}

@Component({
    selector: 'app-my-component',
    template: `
        <h2>Demo for Dependency Injection</h2>
        <p>
            Note that you have to open your dev tool's console window in order
            to see the output of the button below.
        </p>
        <button class='btn' (click)="sender.SendMessage('Foo Bar', 'Hi')">
            Send Message
        </button>
        <button class='btn' (click)="SendWithRuntimeInjection('Foo Bar', 'Hi')">
            Send Message with Runtime Injection
        </button>
        `,
    providers: [
        Logger,
        { provide: PRIORITY, useValue: 'HIGH' },
        MailBuilder

        // Note how you could provide a factory method that Angular would use
        // to create a MailBuilder instance.
        // { provide: MailBuilder, useFactory: mailBuilderFactory, deps: [Logger] }
    ]
})
export class MyComponent {
    public runtimeSender: MailBuilder;

    constructor(public sender: MailBuilder) {
        // Note that component receives mail sender object in constructor
        // parameters instead of creating a concrete sender implementation
        // with "new" itself.

        // Also note that all injected services are singletons. However, you
        // can use Angular's hierarchical injection system to create nested
        // injectors that can create their own service instances. For details see
        // https://angular.io/docs/ts/latest/guide/hierarchical-dependency-injection.html
    }

    public SendWithRuntimeInjection(to: string, message: string) {
        if (!this.runtimeSender) {
            // This code demonstrates how to explicity create an injector

            // Note how we provide a different implementation of MailBuilder
            // (e.g. for mock objects in unit tests). For details see
            // https://angular.io/docs/ts/latest/api/core/index/ReflectiveInjector-class.html
            const injector = ReflectiveInjector.resolveAndCreate([
                // { provide: Logger, useValue: { log: (_: string) => console.log('Logging mock...') } },
                { provide: MailBuilder, useClass: MailBuilderMock }
            ]);
            this.runtimeSender = injector.get(MailBuilder);

            // The following statement will show that we got a MailBuilderMock instance.
            console.log(`Using ${this.runtimeSender.constructor.name} class`);
        }

        this.runtimeSender.SendMessage(to, message);
    }
}

