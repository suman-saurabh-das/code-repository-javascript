/** 01. MODULE F (IMPORTING CLASSES & FUNCTIONS) */

// • Here we are using named import to get the function and class.
import { greet, GreetMessage } from "./19. moduleE function and class import.js";

greet("Hello World");

let gm = new GreetMessage();
gm.greet();
