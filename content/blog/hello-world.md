# Hello World — Why I Started This Blog

Welcome to my corner of the internet. I'm Shivam, a low-latency C++ developer, and this is where I'll be writing about the things I find interesting in systems programming.

## Why Write?

I've spent years staring at flame graphs, reading disassembly, and arguing about whether `std::optional` is worth the branch. Somewhere along the way, I realized that writing things down helps me think more clearly — and occasionally helps someone else avoid the same rabbit hole I fell into.

## What to Expect

This blog will cover topics like:

- **Low-latency patterns** — lock-free data structures, memory allocators, and the art of keeping things off the heap
- **Networking** — kernel bypass, DPDK, and what happens when you really need that packet *now*
- **Profiling & benchmarking** — how to measure things properly and avoid the many ways microbenchmarks can lie to you
- **C++ deep dives** — template metaprogramming, undefined behavior, and the occasional love letter to `constexpr`

## The Philosophy

I believe in:

> "Premature optimization is the root of all evil" — but knowing *when* optimization is premature requires understanding the machine.

Performance isn't about clever tricks. It's about understanding your hardware, your data, and your access patterns. The best optimization is often the simplest one — the one that makes the code *obviously* fast rather than *cleverly* fast.

## What's Next

I have a few posts in the pipeline:

1. **Cache-friendly data structures** — why your `std::map` is slower than you think
2. **A tour of lock-free queues** — from Lamport to modern MPMC designs
3. **Profiling with `perf`** — a practical guide for C++ developers

Stay tuned. And if you want to chat about any of this, feel free to [reach out](#/contact).
