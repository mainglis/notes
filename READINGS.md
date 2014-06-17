Here are the notes I've been collecting as I muse on how to become a strong developer.  There is a huge amount of material behind these topics, and it's probably something to spiral into - take a superficial pass across the topics to see how they fit together, then dig a little deeper in an area until you slow down, then back away and look in another area.  I think it is in the neighborhood of six months to get a grasp across all of these, and two years to feel solid if you are dedicating an hour or two a day to them.  Of course, you may not want to get to "solid" on all of them.

Fundamentals of code execution:
Hello World in C, perl, python, ruby, java, and javascript.  Perhaps others.
The entire section 2 of unix man, start with ‘man 2 intro’
Linux install and the command line.  Ref http://www.cryptonomicon.com/beginning.html 
Use Oracle’s VirtualBox and Ubuntu desktop to try this out, if you haven’t done it already.
The concepts behind ELF and how an OS starts a program, and how a program calls the OS
An overview of what is in libc
Assembly code for a platform, and how C compiles to it.  The Atmel ATMega (as used in Arduinos) or one of the Microchip 16 bit platforms are a good place to look at a straightforward instruction set.
The concept of microcode, and its presence inside modern processors to control computing units
How logic circuits are combined to produce computing units
How transistors can create logic gates
(Everything below this level toggles over into analog electrical engineering, and while interesting, isn’t of relevance to programming).
Networking basics:
The ISO seven layer model
How ethernet packets work, what ARP does, and what DHCP does.
The IP RFC, and a rough idea of UDP and TCP.
The HTTP RFC  (0.9 is sufficient)
Quick glance at Telnet and FTP  ( obsolete protocols that predate security requirements on the Internet, but were the dominant protocols at the inception of the net ).
Language families:
C
Passing familiarity with ideas behind APL, Forth, and Lisp
Object Oriented:  Ruby, Python, or Java are good places to start
Functional:  Scala, Haskell, or Scheme are good places to start
Relational:  SQL.  Contrast MongoDb and Cassandra, or Redis
Web:  Javascript, CSS, HTML.  Learn these last, they rest on everything else.
Algorithms:
Read some Knuth.  Yes, it will make your brain hurt.  Best taken in small chunks over a long time.