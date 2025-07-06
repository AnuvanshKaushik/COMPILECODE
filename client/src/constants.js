// Language versions supported by the backend/execution engine
export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
  cpp: "11.2.0",
  c: "10.2.0",
  ruby: "3.2.2",
  go: "1.20.3",
  rust: "1.68.2",
  swift: "5.8.1",
  kotlin: "1.8.10",
  r: "4.2.2",
  perl: "5.34.0",
  scala: "2.13.10",
  dart: "2.19.6",
  bash: "5.1.16",
  lua: "5.4.4",
  clojure: "1.11.1",
  sql: "sqlite-3.39.2"
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
};
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
    System.out.println("Hello, Alex!");
  }
}
`,

  csharp: `
using System;
class Hello {
  static void Main(string[] args) {
    Console.WriteLine("Hello, Alex!");
  }
}
`,

  php: `
<?php
$name = 'Alex';
echo "Hello, " . $name . "!";
?>
`,

  cpp: `
#include <iostream>
using namespace std;
int main() {
  cout << "Hello, Alex!" << endl;
  return 0;
}
`,

  c: `
#include <stdio.h>
int main() {
  printf("Hello, Alex!\\n");
  return 0;
}
`,

  ruby: `
def greet(name)
  puts "Hello, #{name}!"
end
greet("Alex")
`,

  go: `
package main
import "fmt"
func main() {
  fmt.Println("Hello, Alex!")
}
`,

  rust: `
fn main() {
  println!("Hello, Alex!");
}
`,

  swift: `
import Foundation
print("Hello, Alex!")
`,

  kotlin: `
fun main() {
  println("Hello, Alex!")
}
`,

  r: `
name <- "Alex"
cat("Hello,", name, "!\n")
`,

  perl: `
my $name = "Alex";
print "Hello, $name!\\n";
`,

  scala: `
object HelloWorld {
  def main(args: Array[String]) = {
    println("Hello, Alex!")
  }
}
`,

  dart: `
void main() {
  print('Hello, Alex!');
}
`,

  bash: `
#!/bin/bash
echo "Hello, Alex!"
`,

  lua: `
local name = "Alex"
print("Hello, " .. name .. "!")
`,

  clojure: `
(println "Hello, Alex!")
`,

  sql: `
SELECT 'Hello, Alex!' AS greeting;
`
};
