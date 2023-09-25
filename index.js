> const cats  = ["Milo", "Otis", "Garfield"];
undefined
> cats
[ 'Milo', 'Otis', 'Garfield' ]
> cats.push("Ralph");
4
> cats
[ 'Milo', 'Otis', 'Garfield', 'Ralph' ]
> cats.unshift("Bob");
5
> cats
[ 'Bob', 'Milo', 'Otis', 'Garfield', 'Ralph' ]
> cats.pop("Ralph");
'Ralph'
> cats
[ 'Bob', 'Milo', 'Otis', 'Garfield' ]
> cats.slice(1,-1);
[ 'Milo', 'Otis' ]
> cats
[ 'Bob', 'Milo', 'Otis', 'Garfield' ]
> cats.slice(2)
[ 'Otis', 'Garfield' ]
> cats.push("Broom");
5
> cats
[ 'Bob', 'Milo', 'Otis', 'Garfield', 'Broom' ]
> cats.slice(1,length-1);
Uncaught ReferenceError: length is not defined
> cats.slice(1,-1);
[ 'Milo', 'Otis', 'Garfield' ]
> cats.unshift("Arnold");
6
> cats
[ 'Arnold', 'Bob', 'Milo', 'Otis', 'Garfield', 'Broom' ]
> cats.slice(2,-1);
[ 'Milo', 'Otis', 'Garfield' ]
> cats.pop(1,);
'Broom'
> cats
[ 'Arnold', 'Bob', 'Milo', 'Otis', 'Garfield' ]
> cats.slice(2,-1);
[ 'Milo', 'Otis' ]
> cats
[ 'Arnold', 'Bob', 'Milo', 'Otis', 'Garfield' ]
> cats.slice(2,);
[ 'Milo', 'Otis', 'Garfield' ]
> cats
[ 'Arnold', 'Bob', 'Milo', 'Otis', 'Garfield' ]
> cats.slice(3);
[ 'Otis', 'Garfield' ]
> cats
[ 'Arnold', 'Bob', 'Milo', 'Otis', 'Garfield' ]
> cats.slice(2,);
[ 'Milo', 'Otis', 'Garfield' ]





