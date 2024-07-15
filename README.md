# raesi ርእሲ

Repository implementing cryptographic primitives useful in games for verification in Algorand.

# Introduction

Online casinos have proven very popular but require trusting 3rd parties. What if we could use the Algorand blockchain to not only store bets but also punish anyone trying to cheat?

Imagine a group of friends meeting up to play a card game of some sort. One of them acts as the dealer, taking the deck of cards, counting to make sure all the 52 cards are there, before shuffling it.

Afterwards, the dealer deals the cards, face down, to all the players. The players are now in posession of their own _hands_, a type of hidden state. As the game progresses, players might need to draw cards from the deck, hand over cards from one player to another, or reveal their hands to the table.

While someone could cheat with a sleight of hands, the laws of physics and our own ability to observe make us trust that these card games are being carried out fairly. Without having to trust a third party.

The question becomes, how can we do it when we are not next to each other? But rather continents away. The answer lies in cryptography.

The [ROYALE paper](https://eprint.iacr.org/2018/157) by Dr Bernardo David et al provides a good overview, based on the primitives introduced by Smart and Barnett in [Mental Poker Revisited](https://link.springer.com/content/pdf/10.1007/978-3-540-40974-8_29.pdf) and the efficient [ZKP argument for correctness of a shuffle](https://link.springer.com/content/pdf/10.1007/978-3-642-29011-4_17.pdf) defined by Groth and Bayer.

Note that the focus should not only be on typical casino card games, rather these techniques - combined with the expressiveness of the Algorand Virtual Machine - can be used for arbitrary card games, trading card games, board games and so on.

# Game Actions

## ርእሲ Meaning

ርእሲ, pronounced r-uh-si, literally means "head" in the Tigrinya language and comes from the proto-semitic [raʔš-](https://en.wiktionary.org/wiki/Reconstruction:Proto-Semitic/ra%CA%94š-).

It was also used as a title for the old Abyssinian nobility, equivalent to [duke](https://en.wikipedia.org/wiki/Ethiopian_aristocratic_and_court_titles#Ras), e.g. as in _Ras_ [Tefari Mekonnen](https://en.wikipedia.org/wiki/Haile_Selassie) (origin of [Rastafarianism](https://en.wikipedia.org/wiki/Rastafari)).

The reference is two-fold: the set of cryptographic problems related to playing fair games over a distance (without a trusted 3rd party) is commonly named [_Mental_ Poker](https://en.wikipedia.org/wiki/Mental_poker). And while the techniques used to do mental poker are not limited to poker, or indeed card games, the most powerful cards in games utilizing the French-suited 52-card deck are typically the royal ones.
