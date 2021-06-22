interface IF1 {
  id: number;
}

interface IF2 extends IF1 {
  name: string;
}

let if2: IF2 = {
  id: 1,
  name: 'if2'
}