---
title: "ChatGPT : c'est quoi ?"
date: 2023-08-01
category: "Intelligence Artificielle"
summary: "Note de veille expliquant ce qu'est ChatGPT, chatbot basé sur un LLM de l'architecture GPT d'OpenAI : son fonctionnement par prédiction de tokens, son usage en mode conversationnel et les limites de fiabilité du système."
---

## Contenu

ChatGPT est un chatbot qui s'appuie sur un LLM (Large Language Model // Grand modèle de langage.) basé sur l'architecture GPT (Generative Pre-trained Transformer), développé par OpenAI. OpenAI est une entreprise fondée en partie par Elon Musk et qui a bénéficié d'investissements massifs de la part de Microsoft depuis 2019.

ChatGPT n'est pas le seul LLM, Retrouvez le panorama des différents LLMs disponibles, réalisé par le pôle d'analyse de AI Builders AI Builders Research.

## Ça fonctionne comment ?

ChatGPT permet d'accomplir les tâches suivantes :

- Analyser un texte d'entrée et le découper en une série d'éléments de texte, appelés « tokens ».
- Prédire les tokens suivants de manière à ce que ces prédictions reflètent les données sur lesquelles le modèle a été « entraîné ».

Fondamentalement, sa fonction principale est de répondre à la question suivante :

En supposant que le « prompt » (le texte d'entrée) constitue le début d'un texte issu des données d'entraînement, quelle serait la suite la plus probable ?

Il réalise cela en calculant les probabilités pour le token suivant, puis en utilisant le nouveau texte ainsi formé pour calculer les probabilités du token suivant, et ainsi de suite. Le texte généré sera donc similaire aux textes présents dans les données d'entraînement.

Son rôle principal est de générer une suite crédible pour un texte donné. Le terme « crédible » signifie que cette suite correspond aux corpus de textes utilisés pour l'entraînement du modèle, sans nécessairement signifier qu'elle est correcte.Comme la grande majorité des textes d'entraînement sont en langage naturel, la suite du texte généré par le modèle est également en langage naturel. Bien que cela puisse sembler qu'il raisonne et produit du sens, en réalité, il se contente de calculer des probabilités pour le token suivant et d'afficher le plus probable.

## Prédiction de texte et chatbot

Lorsque nous utilisons un prompt qui ressemble à une partie de conversation, ChatGPT continue probablement en générant une suite qui ressemble à une continuation de la conversation, en s'appuyant sur ce qu'il a appris lors de son entraînement.

Le fine-tuning consiste à ajuster le modèle et le programme pour qu'ils puissent générer du texte en réponse à des instructions spécifiques. L'apprentissage par renforcement à partir de rétroactions humaines a été utilisé pour "dresser" le modèle, en utilisant un système de récompenses et de punitions, afin qu'il puisse générer du texte de manière similaire à un chatbot.

Les prompts « cadre » sont constitués d'un ensemble de « pré-prompts » cachés qui conditionnent la manière dont il formulera ses premières réponses. Ces prompts sont formulés sous forme de dialogue en adresse directe, ce qui fait que le modèle reproduit cette forme telle qu'il l'a observée dans ses données d'entraînement et dans son apprentissage par rétroaction.

ChatGPT se base sur le texte précédent pour générer ses réponses (ses prédictions), ce qui signifie que : Il maintient la continuité dans la conversation, en prenant en compte ce qui a été dit précédemment, dans la limite de 3000 tokens pour GPT-3 et 30000 tokens pour GPT-4. Chaque échange crée un contexte qui influence la forme et le contenu de ses réponses futures. GPT-3 et GPT-4 ont été formés avec une énorme quantité de données d'entraînement, représentant un vaste échantillon de ce que l'humanité a produit jusqu'en 2021.

ChatGPT se base sur le texte précédent pour générer ses réponses (ses prédictions), ce qui signifie que :

- Il maintient la continuité dans la conversation, en prenant en compte ce qui a été dit précédemment, dans la limite de 3000 tokens pour GPT-3 et 30000 tokens pour GPT-4.
- Chaque échange crée un contexte qui influence la forme et le contenu de ses réponses futures.

## Pourquoi ça "marche" si bien ?

GPT se construit sur une masse de données gigantesque, un échantillon énorme de ce que l'humanité a produit jusque 2021. Les données suivantes sont des estimations :

## Les limites du système

ChatGPT ne parcourt pas des bases de données pour répondre, il prédit la suite de caractères la plus crédible du point de vue de la langue et non du contenu. Il est de plus en plus difficile de prendre en défaut les dernières versions de GPT, mais la fiabilité n'est jamais garantie. Exemple :

Attention ces informations sont certainement déjà obsolètes à l'heure où vous les lisez. Cette note de veille a été rédigée en août 2023.
