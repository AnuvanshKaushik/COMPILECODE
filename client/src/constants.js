// Language versions supported by the backend/execution engine
export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
  cpp: "11.2.0" // or any version you support, adjust as needed
};

// Default code snippets for each language
export const CODE_SNIPPETS = {
  javascript: `
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alex");
`,

  typescript: `
type Params = {
  name: string;
}

function greet(data: Params) {
  console.log("Hello, " + data.name + "!");
}

greet({ name: "Alex" });
`,

  python: `
def greet(name):
  print("Hello, " + name + "!")

greet("Alex")
`,

  java: `
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
`,

  csharp: `
using System;

namespace HelloWorld
{
  class Hello {
    static void Main(string[] args) {
      Console.WriteLine("Hello World in C#");
    }
  }
}
`,

  php: `
<?php

$name = 'Alex';
echo $name;
`,

  cpp: `
#include <iostream>
using namespace std;

int main() {
  cout << "Hello, Alex!" << endl;
  return 0;
}
`
};
