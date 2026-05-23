const MILIONERZY_PYTANIA = [
  {
    pytanie: "Co oznacza skrót 'AI'?",
    odpowiedzi: { A: "Auto Installer", B: "Artificial Intelligence", C: "Advanced Input", D: "Audio Interface" },
    poprawna: "B"
  },
  {
    pytanie: "Jak nazywa się chatbot stworzony przez firmę OpenAI?",
    odpowiedzi: { A: "Gemini", B: "Claude", C: "ChatGPT", D: "Copilot" },
    poprawna: "C"
  },
  {
    pytanie: "Co to jest sieć neuronowa?",
    odpowiedzi: {
      A: "Kabel w komputerze",
      B: "System obliczeniowy inspirowany ludzkim mózgiem",
      C: "Protokół internetowy",
      D: "Baza danych"
    },
    poprawna: "B"
  },
  {
    pytanie: "Jak nazywa się asystent AI stworzony przez firmę Anthropic?",
    odpowiedzi: { A: "Alexa", B: "Cortana", C: "Bard", D: "Claude" },
    poprawna: "D"
  },
  {
    // milestone!
    pytanie: "W którym roku ChatGPT został publicznie udostępniony po raz pierwszy?",
    odpowiedzi: { A: "2020", B: "2021", C: "2022", D: "2023" },
    poprawna: "C"
  },
  {
    pytanie: "Co to jest 'prompt' w kontekście modeli językowych?",
    odpowiedzi: {
      A: "Błąd w kodzie programu",
      B: "Zapytanie lub polecenie kierowane do modelu AI",
      C: "Rodzaj procesora graficznego",
      D: "Protokół szyfrowania danych"
    },
    poprawna: "B"
  },
  {
    pytanie: "Jak nazywa się technika uczenia AI polegająca na systemie nagród i kar?",
    odpowiedzi: {
      A: "Supervised learning",
      B: "Unsupervised learning",
      C: "Reinforcement learning",
      D: "Transfer learning"
    },
    poprawna: "C"
  },
  {
    pytanie: "Co oznacza skrót 'LLM' w świecie AI?",
    odpowiedzi: {
      A: "Low Level Machine",
      B: "Layered Logic Module",
      C: "Large Language Model",
      D: "Linear Learning Method"
    },
    poprawna: "C"
  },
  {
    pytanie: "W którym roku opublikowano przełomowy artykuł 'Attention is All You Need' opisujący architekturę Transformer?",
    odpowiedzi: { A: "2015", B: "2016", C: "2017", D: "2018" },
    poprawna: "C"
  },
  {
    // milestone!
    pytanie: "Co to jest 'halucynacja' (hallucination) w kontekście modeli językowych?",
    odpowiedzi: {
      A: "Wizualizacja danych 3D przez AI",
      B: "Błąd serwera podczas generowania tekstu",
      C: "Generowanie fałszywych lecz wiarygodnie brzmiących informacji",
      D: "Technika kompresji modelu"
    },
    poprawna: "C"
  },
  {
    pytanie: "Co oznacza skrót 'RLHF' stosowany w trenowaniu modeli jak ChatGPT czy Claude?",
    odpowiedzi: {
      A: "Recursive Learning with High Fidelity",
      B: "Reinforcement Learning from Human Feedback",
      C: "Rapid Language Handling Framework",
      D: "Rotational Logic with Hierarchical Functions"
    },
    poprawna: "B"
  },
  {
    pytanie: "Co opisuje paradoks Moraveca (Moravec's paradox) w dziedzinie AI?",
    odpowiedzi: {
      A: "Im więcej danych, tym lepiej działa model AI",
      B: "Modele AI podwajają możliwości co 18 miesięcy",
      C: "Inteligencja AI przekroczy ludzką dokładnie w 2045 roku",
      D: "To co łatwe dla człowieka jest trudne dla AI i odwrotnie"
    },
    poprawna: "D"
  }
];

// --- QUIZ BŁYSKAWICZNY: pula pytan ---
const QUIZ_PYTANIA = [
  {
    pytanie: "Co oznacza skrót GPU, kluczowy przy trenowaniu AI?",
    opcje: ["Graphics Processing Unit", "General Processing Utility", "Global Program Unit", "Grid Power Usage"],
    poprawna: 0
  },
  {
    pytanie: "Jak nazywa się model AI od Google DeepMind (następca Barda)?",
    opcje: ["Claude", "Llama", "Gemini", "Nova"],
    poprawna: 2
  },
  {
    pytanie: "Co to jest 'deep learning'?",
    opcje: [
      "Przeszukiwanie głębokich baz danych",
      "Uczenie maszynowe z wielowarstwowymi sieciami neuronowymi",
      "Szyfrowanie danych w wielu warstwach",
      "Technika backupu danych"
    ],
    poprawna: 1
  },
  {
    pytanie: "Firma OpenAI została założona między innymi przez...",
    opcje: ["Jeff Bezos i Mark Zuckerberg", "Elon Musk i Sam Altman", "Bill Gates i Satya Nadella", "Larry Page i Sergey Brin"],
    poprawna: 1
  },
  {
    pytanie: "Co to jest 'token' w kontekście LLM?",
    opcje: [
      "Klucz dostępu do API",
      "Kryptowaluta do płacenia za AI",
      "Podstawowa jednostka tekstu przetwarzana przez model",
      "Typ pliku danych"
    ],
    poprawna: 2
  },
  {
    pytanie: "Jak nazywa się model open-source od firmy Meta AI?",
    opcje: ["Falcon", "Mistral", "Llama", "Grok"],
    poprawna: 2
  },
  {
    pytanie: "Co to jest 'fine-tuning' modelu AI?",
    opcje: [
      "Ręczne poprawianie błędów w kodzie",
      "Dodatkowe trenowanie pre-trenowanego modelu na specyficznym zbiorze danych",
      "Optymalizacja szybkości działania serwera",
      "Kalibracja głośności głosu AI"
    ],
    poprawna: 1
  },
  {
    pytanie: "Co oznacza GPT w nazwie ChatGPT?",
    opcje: [
      "General Purpose Technology",
      "Generative Pre-trained Transformer",
      "Global Processing Tool",
      "Guided Prediction Training"
    ],
    poprawna: 1
  },
  {
    pytanie: "Która firma stworzyła model AI o nazwie 'Copilot'?",
    opcje: ["Google", "Apple", "Microsoft", "Amazon"],
    poprawna: 2
  },
  {
    pytanie: "Co to jest 'context window' (okno kontekstowe) w LLM?",
    opcje: [
      "Okno aplikacji na ekranie",
      "Maksymalna ilość tekstu jaką model może przetworzyć naraz",
      "Zakres dat danych treningowych",
      "Interfejs użytkownika do wpisywania promptów"
    ],
    poprawna: 1
  },
  {
    pytanie: "Jak nazywa się metoda, w której model uczy się na nieoznakowanych danych?",
    opcje: ["Supervised learning", "Reinforcement learning", "Unsupervised learning", "Active learning"],
    poprawna: 2
  },
  {
    pytanie: "Co to jest 'embeddings' w przetwarzaniu języka naturalnego?",
    opcje: [
      "Osadzanie filmów wideo w tekście",
      "Liczbowa reprezentacja słów lub zdań w przestrzeni wektorowej",
      "Szyfrowanie wiadomości tekstowych",
      "Kompresja plików dźwiękowych"
    ],
    poprawna: 1
  },
  {
    pytanie: "Rok założenia firmy Anthropic (twórcy Claude)?",
    opcje: ["2019", "2020", "2021", "2022"],
    poprawna: 2
  },
  {
    pytanie: "Co to jest 'GAN' (Generative Adversarial Network)?",
    opcje: [
      "Rodzaj szyfrowania",
      "Sieć złożona z generatora i dyskryminatora trenujących się wzajemnie",
      "Protokół komunikacji między AI",
      "Technika kompresji sieci neuronowej"
    ],
    poprawna: 1
  },
  {
    pytanie: "Który model od OpenAI jest znany z zaawansowanego rozumowania (reasoning)?",
    opcje: ["GPT-3", "DALL-E", "o1 / o3", "Whisper"],
    poprawna: 2
  },
  {
    pytanie: "Co to jest 'RAG' w architekturze systemów AI?",
    opcje: [
      "Random Algorithm Generation",
      "Retrieval-Augmented Generation",
      "Recursive Attention Gating",
      "Rapid API Gateway"
    ],
    poprawna: 1
  },
  {
    pytanie: "Jak nazywa się technika zadawania pytań pomagająca AI lepiej rozumować krok po kroku?",
    opcje: ["Zero-shot prompting", "Few-shot prompting", "Chain-of-thought prompting", "System prompting"],
    poprawna: 2
  },
  {
    pytanie: "Co to jest 'benchmark' w ocenie modeli AI?",
    opcje: [
      "Koszt trenowania modelu",
      "Standaryzowany test do porównywania możliwości modeli",
      "Ilość parametrów modelu",
      "Czas odpowiedzi serwera"
    ],
    poprawna: 1
  },
  {
    pytanie: "Jak nazywa się technologia AI od Google do generowania obrazów zintegrowana z ich produktami?",
    opcje: ["DALL-E", "Midjourney", "Imagen", "Stable Diffusion"],
    poprawna: 2
  },
  {
    pytanie: "Co to jest 'temperature' jako parametr modelu językowego?",
    opcje: [
      "Temperatura serwera GPU",
      "Szybkość generowania tekstu",
      "Parametr kontrolujący losowość i kreatywność odpowiedzi",
      "Długość generowanego tekstu"
    ],
    poprawna: 2
  },
  {
    pytanie: "Co oznacza termin 'multimodal AI'?",
    opcje: [
      "AI działające na wielu serwerach jednocześnie",
      "AI przetwarzające wiele typów danych (tekst, obraz, dźwięk)",
      "AI z wieloma osobowościami",
      "AI działające w wielu językach"
    ],
    poprawna: 1
  },
  {
    pytanie: "Jak nazywa się proces sprawdzania czy AI działa zgodnie z wartościami człowieka?",
    opcje: ["Debugging", "AI Safety / AI Alignment", "Benchmarking", "Fine-tuning"],
    poprawna: 1
  }
];

// --- PRAWDA CZY FALSZ ---
const PRAWDA_FALSZ_PYTANIA = [
  { pytanie: "ChatGPT zostało stworzone przez firmę Google.", odpowiedz: false },
  { pytanie: "GPT-4 jest modelem wielomodalnym — rozumie zarówno tekst jak i obrazy.", odpowiedz: true },
  { pytanie: "Sieć neuronowa jest bezpośrednią kopią ludzkiego mózgu.", odpowiedz: false },
  { pytanie: "Architektura Transformer jest podstawą większości współczesnych modeli językowych.", odpowiedz: true },
  { pytanie: "Model AI może 'halucynować' — czyli generować fałszywe ale przekonujące informacje.", odpowiedz: true },
  { pytanie: "Anthropic to firma założona przez byłych pracowników OpenAI.", odpowiedz: true },
  { pytanie: "DALL-E to model do generowania muzyki.", odpowiedz: false },
  { pytanie: "Im więcej parametrów ma model, tym zawsze jest mądrzejszy.", odpowiedz: false },
  { pytanie: "Claude to asystent AI stworzony przez Anthropic.", odpowiedz: true },
  { pytanie: "Reinforcement learning polega na uczeniu modelu poprzez system nagród i kar.", odpowiedz: true },
  { pytanie: "Modele językowe rozumieją tekst tak samo jak człowiek rozumie znaczenie słów.", odpowiedz: false },
  { pytanie: "Stable Diffusion to model open-source do generowania obrazów.", odpowiedz: true },
  { pytanie: "Llama to model od firmy Meta.", odpowiedz: true },
  { pytanie: "AGI (Artificial General Intelligence) to AI która już istnieje i jest dostępna publicznie.", odpowiedz: false },
  { pytanie: "Embedding to sposób na zamianę tekstu na liczby (wektory).", odpowiedz: true },
  { pytanie: "Modele AI uczą się wyłącznie z danych tekstowych.", odpowiedz: false },
  { pytanie: "Whisper to model OpenAI służący do rozpoznawania mowy.", odpowiedz: true },
  { pytanie: "Każde pytanie do ChatGPT kosztuje firmę pieniądze (prąd i serwery).", odpowiedz: true },
  { pytanie: "AI nie potrzebuje dużych ilości danych do trenowania.", odpowiedz: false },
  { pytanie: "Chain-of-thought prompting pomaga modelom lepiej rozwiązywać zadania logiczne.", odpowiedz: true },
  { pytanie: "Grok to model AI od firmy xAI (Elona Muska).", odpowiedz: true },
  { pytanie: "Parametry modelu AI są przechowywane w specjalnych plikach wag.", odpowiedz: true },
  { pytanie: "Modele AI zawsze odpowiadają w tym samym języku co pytanie.", odpowiedz: false },
  { pytanie: "Context window to limit ilości tekstu jaki model może przetworzyć w jednej rozmowie.", odpowiedz: true }
];


const PYTANIA = [
  { pytanie: "Co oznacza skrót 'AI'?", poprawna: "Artificial Intelligence" },
  { pytanie: "Jak nazywa się chatbot stworzony przez firmę OpenAI?", poprawna: "ChatGPT" },
  { pytanie: "Co to jest sieć neuronowa?", poprawna: "System obliczeniowy inspirowany ludzkim mózgiem" },
  { pytanie: "Jak nazywa się asystent AI stworzony przez firmę Anthropic?", poprawna: "Claude" },
  { pytanie: "W którym roku ChatGPT został publicznie udostępniony po raz pierwszy?", poprawna: "2022" },
  { pytanie: "Co to jest 'prompt' w kontekście modeli językowych?", poprawna: "Zapytanie lub polecenie kierowane do modelu AI" },
  { pytanie: "Jak nazywa się technika uczenia AI polegająca na systemie nagród i kar?", poprawna: "Reinforcement learning" },
  { pytanie: "Co oznacza skrót 'LLM' w świecie AI?", poprawna: "Large Language Model" },
  { pytanie: "W którym roku opublikowano artykuł 'Attention is All You Need' opisujący architekturę Transformer?", poprawna: "2017" },
  { pytanie: "Co to jest 'halucynacja' w kontekście modeli językowych?", poprawna: "Generowanie fałszywych lecz wiarygodnie brzmiących informacji" },
  { pytanie: "Co oznacza skrót 'RLHF' stosowany w trenowaniu modeli jak ChatGPT czy Claude?", poprawna: "Reinforcement Learning from Human Feedback" },
  { pytanie: "Co opisuje paradoks Moraveca w dziedzinie AI?", poprawna: "To co łatwe dla człowieka jest trudne dla AI i odwrotnie" },
  { pytanie: "Co oznacza skrót GPU, kluczowy przy trenowaniu AI?", poprawna: "Graphics Processing Unit" },
  { pytanie: "Jak nazywa się model AI od Google DeepMind (następca Barda)?", poprawna: "Gemini" },
  { pytanie: "Co to jest 'deep learning'?", poprawna: "Uczenie maszynowe z wielowarstwowymi sieciami neuronowymi" },
  { pytanie: "Firma OpenAI została założona między innymi przez...", poprawna: "Elon Musk i Sam Altman" },
  { pytanie: "Co to jest 'token' w kontekście LLM?", poprawna: "Podstawowa jednostka tekstu przetwarzana przez model" },
  { pytanie: "Jak nazywa się model open-source od firmy Meta AI?", poprawna: "Llama" },
  { pytanie: "Co to jest 'fine-tuning' modelu AI?", poprawna: "Dodatkowe trenowanie pre-trenowanego modelu na specyficznym zbiorze danych" },
  { pytanie: "Co oznacza GPT w nazwie ChatGPT?", poprawna: "Generative Pre-trained Transformer" },
  { pytanie: "Która firma stworzyła model AI o nazwie 'Copilot'?", poprawna: "Microsoft" },
  { pytanie: "Co to jest 'context window' (okno kontekstowe) w LLM?", poprawna: "Maksymalna ilość tekstu jaką model może przetworzyć naraz" },
  { pytanie: "Jak nazywa się metoda, w której model uczy się na nieoznakowanych danych?", poprawna: "Unsupervised learning" },
  { pytanie: "Co to jest 'embeddings' w przetwarzaniu języka naturalnego?", poprawna: "Liczbowa reprezentacja słów lub zdań w przestrzeni wektorowej" },
  { pytanie: "Rok założenia firmy Anthropic (twórcy Claude)?", poprawna: "2021" },
  { pytanie: "Co to jest 'GAN' (Generative Adversarial Network)?", poprawna: "Sieć złożona z generatora i dyskryminatora trenujących się wzajemnie" },
  { pytanie: "Który model od OpenAI jest znany z zaawansowanego rozumowania (reasoning)?", poprawna: "o1 / o3" },
  { pytanie: "Co to jest 'RAG' w architekturze systemów AI?", poprawna: "Retrieval-Augmented Generation" },
  { pytanie: "Jak nazywa się technika zadawania pytań pomagająca AI lepiej rozumować krok po kroku?", poprawna: "Chain-of-thought prompting" },
  { pytanie: "Co to jest 'benchmark' w ocenie modeli AI?", poprawna: "Standaryzowany test do porównywania możliwości modeli" },
  { pytanie: "Jak nazywa się technologia AI od Google do generowania obrazów?", poprawna: "Imagen" },
  { pytanie: "Co to jest 'temperature' jako parametr modelu językowego?", poprawna: "Parametr kontrolujący losowość i kreatywność odpowiedzi" },
  { pytanie: "Co oznacza termin 'multimodal AI'?", poprawna: "AI przetwarzające wiele typów danych (tekst, obraz, dźwięk)" },
  { pytanie: "Jak nazywa się proces sprawdzania czy AI działa zgodnie z wartościami człowieka?", poprawna: "AI Safety / AI Alignment" },
  { pytanie: "ChatGPT zostało stworzone przez firmę Google. Prawda czy fałsz?", poprawna: "Fałsz" },
  { pytanie: "Architektura Transformer jest podstawą większości współczesnych modeli językowych. Prawda czy fałsz?", poprawna: "Prawda" },
  { pytanie: "DALL-E to model do generowania muzyki. Prawda czy fałsz?", poprawna: "Fałsz" },
  { pytanie: "Llama to model od firmy Meta. Prawda czy fałsz?", poprawna: "Prawda" },
  { pytanie: "Whisper to model OpenAI służący do rozpoznawania mowy. Prawda czy fałsz?", poprawna: "Prawda" },
  { pytanie: "Grok to model AI od firmy xAI (Elona Muska). Prawda czy fałsz?", poprawna: "Prawda" },
  { pytanie: "AGI (Artificial General Intelligence) to AI która już istnieje i jest dostępna publicznie. Prawda czy fałsz?", poprawna: "Fałsz" },
  { pytanie: "Embedding to sposób na zamianę tekstu na liczby (wektory). Prawda czy fałsz?", poprawna: "Prawda" },
  { pytanie: "Stable Diffusion to model open-source do generowania obrazów. Prawda czy fałsz?", poprawna: "Prawda" },
  { pytanie: "Context window to limit ilości tekstu jaki model może przetworzyć w jednej rozmowie. Prawda czy fałsz?", poprawna: "Prawda" },
];