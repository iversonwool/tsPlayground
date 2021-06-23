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



type IsChild<Child, Par> = Child extends Par ? true: false
type IsPropAssignmentCovariant = IsChild<{type: IF2}, {type: IF1}> //true