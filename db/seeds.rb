u1 = User.create(email: 'john@example.com', password: '123456')
u2 = User.create(email: 'test@example.com', password: 'password')

b1 = u1.boards.create(title: 'Take Over The World')
b2 = u1.boards.create(title: 'Turn My Poems Into A Collection')
b3 = u1.boards.create(title: 'Learn Knitting')


l1 = b1.lists.create(title: 'Basic Preparations')
l2 = b1.lists.create(title: 'Advanced Topics On World Domination')
l3 = b1.lists.create(title: 'Make Them Tremor')


l4 = b2.lists.create(title: 'Start To Write Poems')
l6 = b2.lists.create(title: 'Find Publisher')


l7 = b3.lists.create(title: 'Get Wool')
l8 = b3.lists.create(title: 'Learn To Knit')

c1 = l1.cards.create(title: 'Get money', description: 'via illegal means')
c2 = l1.cards.create(title: 'Gather army', description: 'perhaps a cloned army?')
c3 = l1.cards.create(title: 'Personal development', description: 'via "The Force For Dummies"')

c4 = l2.cards.create(title: 'Work on a personal brand', description: 'orange is the new black')
c5 = l2.cards.create(title: 'Start a war', description: 'and obliterate some planets')
c6 = l2.cards.create(title: 'Build a giant', description: 'interplanetary "Death Rock"')

c7 = l4.cards.create(title: 'Get inspiration', description: 'from other poets')
c8 = l4.cards.create(title: 'Work on compositional', description: 'style')
c9 = l6.cards.create(title: 'Cold calling ', description: 'and network')

i1 = c1.items.create(done: false, title: 'start a rebellion')
i2 = c1.items.create(done: false, title: 'become a space priate')
i3 = c1.items.create(done: true, title: 'take over trade routes')

b1.members = [u2]
b1.save
