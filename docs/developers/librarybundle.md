# Library Bundle

### Introduction

There's very limited information out there about the Final Cut Pro library bundle.

The purpose of this article is to look inside the bundle, and explain what all its bits are and how it works. Let the adventure begin!

---

### Core Data

Before we dig too deep into the Final Cut Pro library, it's important to understand one of the core technologies Apple uses in Final Cut Pro - **Core Data**.

Core Data is an object graph and persistence framework provided by Apple in the macOS and iOS operating systems. More than 13 years old now (at the time of writing), Core Data was introduced in Mac OS X 10.4 Tiger and iOS with iPhone SDK 3.0 and like many parts of macOS, Core Data owes much of its design to an earlier NeXT product, [Enterprise Objects Framework (EOF)](https://en.wikipedia.org/wiki/Enterprise_Objects_Framework).

You can watch the original 2004 WWDC session on Core Data [here](https://www.youtube.com/watch?v=RsmBrENRvig).

You can read Apple's official developer documentation on Core Data [here](https://developer.apple.com/documentation/coredata?language=objc).

Core Data is a framework that you use to manage the model layer objects in an application. It provides generalised and automated solutions to common tasks associated with object life cycle and object graph management, including persistence (meaning that, for example, an iPhone App can remember its settings each time the phone is turned off and on again).

It allows data organised by the relational entity–attribute model to be serialised into XML, binary, or SQLite stores. The data can be manipulated using higher level objects representing entities and their relationships. Core Data manages the serialised version.

Core Data can interface directly with SQLite, insulating the developer from the underlying SQL - but it's **not** a SQL wrapper, and offers a much higher level of abstraction. Instead of writing SQL, you can create complex queries by associating an [NSPredicate](https://developer.apple.com/documentation/foundation/nspredicate?language=objc) object with a fetch request. However, because Core Data can use SQLite, it's easy to get confused with the differences between SQLite and Core Data. Remember that Core Data isn’t a database. If you want an [Object-relational mapping (O/RM)](https://en.wikipedia.org/wiki/Object-relational_mapping) or SQL wrapper, Core Data is not what you want.

Essentially, Core Data is a model layer technology, that's been designed to help programmers do lots of cool stuff, whilst writing less code. It's a toolkit that allows developers to more easily access and manipulate data. For example, it has built-in undo/redo management, allowing developers to add complex undo/redo functionality to their applications with minimum code.

Even though Core Data is a fantastic framework, there are several drawbacks. These drawbacks are directly related to the nature of the framework and how it works.

Core Data can only do its magic because it keeps the object graph it manages in memory. This means that it can only operate on records once they’re in memory. This is very different from performing a SQL query on a database. If you want to delete thousands of records, Core Data first needs to load each record into memory. It goes without saying that this results in memory and performance issues if done incorrectly.

Another important limitation is the threading model of Core Data. The framework expects to be run on a single thread. Fortunately, Core Data has evolved dramatically over the years and the framework has put [various solutions](https://cocoacasts.com/core-data-and-concurrency) in place to make working with Core Data in a multithreaded environment safer and easier.

For applications that need to manage a complex object graph (i.e. Final Cut Pro), Core Data is a great fit.

---

### DeepSkyLite

Final Cut Pro uses a lot of internal Frameworks, which you can learn more about [here](https://lab.commandpost.io/final-cut-pro/application-bundle#frameworks).

Within the Flexo Framework, is a framework called DeepSkyLite, which is essentially the "database engine" for Final Cut Pro.

Inside the DeepSkyLite Framework is two Compiled Core Data Models:

- `DSLite_v1.mom`
- `DSLite_v2b1.mom`

A `.mom` file is a binary property list that's [`NSKeyedArchiver`](https://developer.apple.com/documentation/foundation/nskeyedarchiver?language=objc) encoded. You can easily open it up in something like BBEdit and have a look, but the easiest and best way to explore a Core Data Model is to just [import it back into Xcode](https://stackoverflow.com/a/24162480).

Here's what Final Cut Pro's model looks like in Xcode:

![Patent Screenshot](static/model.png)