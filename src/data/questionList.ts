import { IProblem } from '../types/problem';

const listData: IProblem[] = [
  {
    id: '1',
    title: '멀티 프로세스의 특징',
    numberSolved: 522323,
    averageScore: 6.8,
    highestScore: 9.2,
    lowestScore: 1.3,
    tagList: ['운영체제', '네트워크'],
    desc: '멀티 스레드의 공유 자원 문제가 생기는 예시와 멀티 프로세스의 공유 자원 문제가 생기는 예시를 각각 설명해주세요. 언제 공유자원문제가 발생할까요?',
    keywordList: ['키워드1', '키워드2', '키워드3', '키워드4'],
    answer:
      '멀티 스레드는 동일한 프로세스의 메모리를 공유하다보니 동시에 같은 변수에 접근할때 공유 자원 문제가 생겨요. 가장 유명한 예시로 각 스레드로 같은 변수를 증가시켰을때 원하지 않는 값이 나오지 않는 예시가 있습니다.멀티 프로세스에서는 메모리를 공유하지 않지만 CPU는 한번에 하나의 프로세스만 실행 가능합니다. 즉 CPU를 선점하기위해 서로 race condition이 생길 수도 있다는 말이죠. 추가적으로 프로세스는 서로 경쟁상대이기 때문에 교착상태를 일으킬 수 있습니다.',
  },
  {
    id: '2',
    title: '멀티 프로세스의 특징',
    numberSolved: 522323,
    averageScore: 6.8,
    highestScore: 9.2,
    lowestScore: 1.3,
    tagList: ['운영체제'],
    desc: '멀티 스레드의 공유 자원 문제가 생기는 예시와 멀티 프로세스의 공유 자원 문제가 생기는 예시를 각각 설명해주세요. 언제 공유자원문제가 발생할까요?',
    keywordList: ['키워드1', '키워드2', '키워드3', '키워드4'],
    answer:
      '멀티 스레드는 동일한 프로세스의 메모리를 공유하다보니 동시에 같은 변수에 접근할때 공유 자원 문제가 생겨요. 가장 유명한 예시로 각 스레드로 같은 변수를 증가시켰을때 원하지 않는 값이 나오지 않는 예시가 있습니다.멀티 프로세스에서는 메모리를 공유하지 않지만 CPU는 한번에 하나의 프로세스만 실행 가능합니다. 즉 CPU를 선점하기위해 서로 race condition이 생길 수도 있다는 말이죠. 추가적으로 프로세스는 서로 경쟁상대이기 때문에 교착상태를 일으킬 수 있습니다.',
  },
  {
    id: '3',
    title: '멀티 프로세스의 특징',
    numberSolved: 522323,
    averageScore: 6.8,
    highestScore: 9.2,
    lowestScore: 1.3,
    tagList: ['운영체제'],
    desc: '멀티 스레드의 공유 자원 문제가 생기는 예시와 멀티 프로세스의 공유 자원 문제가 생기는 예시를 각각 설명해주세요. 언제 공유자원문제가 발생할까요?',
    keywordList: ['키워드1', '키워드2', '키워드3', '키워드4'],
    answer:
      '멀티 스레드는 동일한 프로세스의 메모리를 공유하다보니 동시에 같은 변수에 접근할때 공유 자원 문제가 생겨요. 가장 유명한 예시로 각 스레드로 같은 변수를 증가시켰을때 원하지 않는 값이 나오지 않는 예시가 있습니다.멀티 프로세스에서는 메모리를 공유하지 않지만 CPU는 한번에 하나의 프로세스만 실행 가능합니다. 즉 CPU를 선점하기위해 서로 race condition이 생길 수도 있다는 말이죠. 추가적으로 프로세스는 서로 경쟁상대이기 때문에 교착상태를 일으킬 수 있습니다.',
  },
  {
    id: '4',
    title: '멀티 프로세스의 특징',
    numberSolved: 522323,
    averageScore: 6.8,
    highestScore: 9.2,
    lowestScore: 1.3,
    tagList: ['운영체제'],
    desc: '멀티 스레드의 공유 자원 문제가 생기는 예시와 멀티 프로세스의 공유 자원 문제가 생기는 예시를 각각 설명해주세요. 언제 공유자원문제가 발생할까요?',
    keywordList: ['키워드1', '키워드2', '키워드3', '키워드4'],
    answer:
      '멀티 스레드는 동일한 프로세스의 메모리를 공유하다보니 동시에 같은 변수에 접근할때 공유 자원 문제가 생겨요. 가장 유명한 예시로 각 스레드로 같은 변수를 증가시켰을때 원하지 않는 값이 나오지 않는 예시가 있습니다.멀티 프로세스에서는 메모리를 공유하지 않지만 CPU는 한번에 하나의 프로세스만 실행 가능합니다. 즉 CPU를 선점하기위해 서로 race condition이 생길 수도 있다는 말이죠. 추가적으로 프로세스는 서로 경쟁상대이기 때문에 교착상태를 일으킬 수 있습니다.',
  },
  {
    id: '5',
    title: '멀티 프로세스의 특징',
    numberSolved: 522323,
    averageScore: 6.8,
    highestScore: 9.2,
    lowestScore: 1.3,
    tagList: ['운영체제'],
    desc: '멀티 스레드의 공유 자원 문제가 생기는 예시와 멀티 프로세스의 공유 자원 문제가 생기는 예시를 각각 설명해주세요. 언제 공유자원문제가 발생할까요?',
    keywordList: ['키워드1', '키워드2', '키워드3', '키워드4'],
    answer:
      '멀티 스레드는 동일한 프로세스의 메모리를 공유하다보니 동시에 같은 변수에 접근할때 공유 자원 문제가 생겨요. 가장 유명한 예시로 각 스레드로 같은 변수를 증가시켰을때 원하지 않는 값이 나오지 않는 예시가 있습니다.멀티 프로세스에서는 메모리를 공유하지 않지만 CPU는 한번에 하나의 프로세스만 실행 가능합니다. 즉 CPU를 선점하기위해 서로 race condition이 생길 수도 있다는 말이죠. 추가적으로 프로세스는 서로 경쟁상대이기 때문에 교착상태를 일으킬 수 있습니다.',
  },
  {
    id: '6',
    title: '멀티 프로세스의 특징',
    numberSolved: 522323,
    averageScore: 6.8,
    highestScore: 9.2,
    lowestScore: 1.3,
    tagList: ['운영체제'],
    desc: '멀티 스레드의 공유 자원 문제가 생기는 예시와 멀티 프로세스의 공유 자원 문제가 생기는 예시를 각각 설명해주세요. 언제 공유자원문제가 발생할까요?',
    keywordList: ['키워드1', '키워드2', '키워드3', '키워드4'],
    answer:
      '멀티 스레드는 동일한 프로세스의 메모리를 공유하다보니 동시에 같은 변수에 접근할때 공유 자원 문제가 생겨요. 가장 유명한 예시로 각 스레드로 같은 변수를 증가시켰을때 원하지 않는 값이 나오지 않는 예시가 있습니다.멀티 프로세스에서는 메모리를 공유하지 않지만 CPU는 한번에 하나의 프로세스만 실행 가능합니다. 즉 CPU를 선점하기위해 서로 race condition이 생길 수도 있다는 말이죠. 추가적으로 프로세스는 서로 경쟁상대이기 때문에 교착상태를 일으킬 수 있습니다.',
  },
  {
    id: '7',
    title: '멀티 프로세스의 특징',
    numberSolved: 522323,
    averageScore: 6.8,
    highestScore: 9.2,
    lowestScore: 1.3,
    tagList: ['운영체제'],
    desc: '멀티 스레드의 공유 자원 문제가 생기는 예시와 멀티 프로세스의 공유 자원 문제가 생기는 예시를 각각 설명해주세요. 언제 공유자원문제가 발생할까요?',
    keywordList: ['키워드1', '키워드2', '키워드3', '키워드4'],
    answer:
      '멀티 스레드는 동일한 프로세스의 메모리를 공유하다보니 동시에 같은 변수에 접근할때 공유 자원 문제가 생겨요. 가장 유명한 예시로 각 스레드로 같은 변수를 증가시켰을때 원하지 않는 값이 나오지 않는 예시가 있습니다.멀티 프로세스에서는 메모리를 공유하지 않지만 CPU는 한번에 하나의 프로세스만 실행 가능합니다. 즉 CPU를 선점하기위해 서로 race condition이 생길 수도 있다는 말이죠. 추가적으로 프로세스는 서로 경쟁상대이기 때문에 교착상태를 일으킬 수 있습니다.',
  },
  {
    id: '8',
    title: '멀티 프로세스의 특징',
    numberSolved: 522323,
    averageScore: 6.8,
    highestScore: 9.2,
    lowestScore: 1.3,
    tagList: ['운영체제'],
    desc: '멀티 스레드의 공유 자원 문제가 생기는 예시와 멀티 프로세스의 공유 자원 문제가 생기는 예시를 각각 설명해주세요. 언제 공유자원문제가 발생할까요?',
    keywordList: ['키워드1', '키워드2', '키워드3', '키워드4'],
    answer:
      '멀티 스레드는 동일한 프로세스의 메모리를 공유하다보니 동시에 같은 변수에 접근할때 공유 자원 문제가 생겨요. 가장 유명한 예시로 각 스레드로 같은 변수를 증가시켰을때 원하지 않는 값이 나오지 않는 예시가 있습니다.멀티 프로세스에서는 메모리를 공유하지 않지만 CPU는 한번에 하나의 프로세스만 실행 가능합니다. 즉 CPU를 선점하기위해 서로 race condition이 생길 수도 있다는 말이죠. 추가적으로 프로세스는 서로 경쟁상대이기 때문에 교착상태를 일으킬 수 있습니다.',
  },
  {
    id: '9',
    title: '멀티 프로세스의 특징',
    numberSolved: 522323,
    averageScore: 6.8,
    highestScore: 9.2,
    lowestScore: 1.3,
    tagList: ['운영체제'],
    desc: '멀티 스레드의 공유 자원 문제가 생기는 예시와 멀티 프로세스의 공유 자원 문제가 생기는 예시를 각각 설명해주세요. 언제 공유자원문제가 발생할까요?',
    keywordList: ['키워드1', '키워드2', '키워드3', '키워드4'],
    answer:
      '멀티 스레드는 동일한 프로세스의 메모리를 공유하다보니 동시에 같은 변수에 접근할때 공유 자원 문제가 생겨요. 가장 유명한 예시로 각 스레드로 같은 변수를 증가시켰을때 원하지 않는 값이 나오지 않는 예시가 있습니다.멀티 프로세스에서는 메모리를 공유하지 않지만 CPU는 한번에 하나의 프로세스만 실행 가능합니다. 즉 CPU를 선점하기위해 서로 race condition이 생길 수도 있다는 말이죠. 추가적으로 프로세스는 서로 경쟁상대이기 때문에 교착상태를 일으킬 수 있습니다.',
  },
  {
    id: '10',
    title: '멀티 프로세스의 특징',
    numberSolved: 522323,
    averageScore: 6.8,
    highestScore: 9.2,
    lowestScore: 1.3,
    tagList: ['운영체제'],
    desc: '멀티 스레드의 공유 자원 문제가 생기는 예시와 멀티 프로세스의 공유 자원 문제가 생기는 예시를 각각 설명해주세요. 언제 공유자원문제가 발생할까요?',
    keywordList: ['키워드1', '키워드2', '키워드3', '키워드4'],
    answer:
      '멀티 스레드는 동일한 프로세스의 메모리를 공유하다보니 동시에 같은 변수에 접근할때 공유 자원 문제가 생겨요. 가장 유명한 예시로 각 스레드로 같은 변수를 증가시켰을때 원하지 않는 값이 나오지 않는 예시가 있습니다.멀티 프로세스에서는 메모리를 공유하지 않지만 CPU는 한번에 하나의 프로세스만 실행 가능합니다. 즉 CPU를 선점하기위해 서로 race condition이 생길 수도 있다는 말이죠. 추가적으로 프로세스는 서로 경쟁상대이기 때문에 교착상태를 일으킬 수 있습니다.',
  },
  {
    id: '11',
    title: '멀티 프로세스의 특징',
    numberSolved: 522323,
    averageScore: 6.8,
    highestScore: 9.2,
    lowestScore: 1.3,
    tagList: ['운영체제'],
    desc: '멀티 스레드의 공유 자원 문제가 생기는 예시와 멀티 프로세스의 공유 자원 문제가 생기는 예시를 각각 설명해주세요. 언제 공유자원문제가 발생할까요?',
    keywordList: ['키워드1', '키워드2', '키워드3', '키워드4'],
    answer:
      '멀티 스레드는 동일한 프로세스의 메모리를 공유하다보니 동시에 같은 변수에 접근할때 공유 자원 문제가 생겨요. 가장 유명한 예시로 각 스레드로 같은 변수를 증가시켰을때 원하지 않는 값이 나오지 않는 예시가 있습니다.멀티 프로세스에서는 메모리를 공유하지 않지만 CPU는 한번에 하나의 프로세스만 실행 가능합니다. 즉 CPU를 선점하기위해 서로 race condition이 생길 수도 있다는 말이죠. 추가적으로 프로세스는 서로 경쟁상대이기 때문에 교착상태를 일으킬 수 있습니다.',
  },
  {
    id: '12',
    title: '멀티 프로세스의 특징',
    numberSolved: 522323,
    averageScore: 6.8,
    highestScore: 9.2,
    lowestScore: 1.3,
    tagList: ['운영체제'],
    desc: '멀티 스레드의 공유 자원 문제가 생기는 예시와 멀티 프로세스의 공유 자원 문제가 생기는 예시를 각각 설명해주세요. 언제 공유자원문제가 발생할까요?',
    keywordList: ['키워드1', '키워드2', '키워드3', '키워드4'],
    answer:
      '멀티 스레드는 동일한 프로세스의 메모리를 공유하다보니 동시에 같은 변수에 접근할때 공유 자원 문제가 생겨요. 가장 유명한 예시로 각 스레드로 같은 변수를 증가시켰을때 원하지 않는 값이 나오지 않는 예시가 있습니다.멀티 프로세스에서는 메모리를 공유하지 않지만 CPU는 한번에 하나의 프로세스만 실행 가능합니다. 즉 CPU를 선점하기위해 서로 race condition이 생길 수도 있다는 말이죠. 추가적으로 프로세스는 서로 경쟁상대이기 때문에 교착상태를 일으킬 수 있습니다.',
  },
  {
    id: '13',
    title: '멀티 프로세스의 특징',
    numberSolved: 522323,
    averageScore: 6.8,
    highestScore: 9.2,
    lowestScore: 1.3,
    tagList: ['운영체제'],
    desc: '멀티 스레드의 공유 자원 문제가 생기는 예시와 멀티 프로세스의 공유 자원 문제가 생기는 예시를 각각 설명해주세요. 언제 공유자원문제가 발생할까요?',
    keywordList: ['키워드1', '키워드2', '키워드3', '키워드4'],
    answer:
      '멀티 스레드는 동일한 프로세스의 메모리를 공유하다보니 동시에 같은 변수에 접근할때 공유 자원 문제가 생겨요. 가장 유명한 예시로 각 스레드로 같은 변수를 증가시켰을때 원하지 않는 값이 나오지 않는 예시가 있습니다.멀티 프로세스에서는 메모리를 공유하지 않지만 CPU는 한번에 하나의 프로세스만 실행 가능합니다. 즉 CPU를 선점하기위해 서로 race condition이 생길 수도 있다는 말이죠. 추가적으로 프로세스는 서로 경쟁상대이기 때문에 교착상태를 일으킬 수 있습니다.',
  },
  {
    id: '14',
    title: '멀티 프로세스의 특징',
    numberSolved: 522323,
    averageScore: 6.8,
    highestScore: 9.2,
    lowestScore: 1.3,
    tagList: ['운영체제'],
    desc: '멀티 스레드의 공유 자원 문제가 생기는 예시와 멀티 프로세스의 공유 자원 문제가 생기는 예시를 각각 설명해주세요. 언제 공유자원문제가 발생할까요?',
    keywordList: ['키워드1', '키워드2', '키워드3', '키워드4'],
    answer:
      '멀티 스레드는 동일한 프로세스의 메모리를 공유하다보니 동시에 같은 변수에 접근할때 공유 자원 문제가 생겨요. 가장 유명한 예시로 각 스레드로 같은 변수를 증가시켰을때 원하지 않는 값이 나오지 않는 예시가 있습니다.멀티 프로세스에서는 메모리를 공유하지 않지만 CPU는 한번에 하나의 프로세스만 실행 가능합니다. 즉 CPU를 선점하기위해 서로 race condition이 생길 수도 있다는 말이죠. 추가적으로 프로세스는 서로 경쟁상대이기 때문에 교착상태를 일으킬 수 있습니다.',
  },
  {
    id: '15',
    title: '멀티 프로세스의 특징',
    numberSolved: 522323,
    averageScore: 6.8,
    highestScore: 9.2,
    lowestScore: 1.3,
    tagList: ['운영체제'],
    desc: '멀티 스레드의 공유 자원 문제가 생기는 예시와 멀티 프로세스의 공유 자원 문제가 생기는 예시를 각각 설명해주세요. 언제 공유자원문제가 발생할까요?',
    keywordList: ['키워드1', '키워드2', '키워드3', '키워드4'],
    answer:
      '멀티 스레드는 동일한 프로세스의 메모리를 공유하다보니 동시에 같은 변수에 접근할때 공유 자원 문제가 생겨요. 가장 유명한 예시로 각 스레드로 같은 변수를 증가시켰을때 원하지 않는 값이 나오지 않는 예시가 있습니다.멀티 프로세스에서는 메모리를 공유하지 않지만 CPU는 한번에 하나의 프로세스만 실행 가능합니다. 즉 CPU를 선점하기위해 서로 race condition이 생길 수도 있다는 말이죠. 추가적으로 프로세스는 서로 경쟁상대이기 때문에 교착상태를 일으킬 수 있습니다.',
  },
  {
    id: '16',
    title: '멀티 프로세스의 특징',
    numberSolved: 522323,
    averageScore: 6.8,
    highestScore: 9.2,
    lowestScore: 1.3,
    tagList: ['운영체제'],
    desc: '멀티 스레드의 공유 자원 문제가 생기는 예시와 멀티 프로세스의 공유 자원 문제가 생기는 예시를 각각 설명해주세요. 언제 공유자원문제가 발생할까요?',
    keywordList: ['키워드1', '키워드2', '키워드3', '키워드4'],
    answer:
      '멀티 스레드는 동일한 프로세스의 메모리를 공유하다보니 동시에 같은 변수에 접근할때 공유 자원 문제가 생겨요. 가장 유명한 예시로 각 스레드로 같은 변수를 증가시켰을때 원하지 않는 값이 나오지 않는 예시가 있습니다.멀티 프로세스에서는 메모리를 공유하지 않지만 CPU는 한번에 하나의 프로세스만 실행 가능합니다. 즉 CPU를 선점하기위해 서로 race condition이 생길 수도 있다는 말이죠. 추가적으로 프로세스는 서로 경쟁상대이기 때문에 교착상태를 일으킬 수 있습니다.',
  },
  {
    id: '17',
    title: '멀티 프로세스의 특징',
    numberSolved: 522323,
    averageScore: 6.8,
    highestScore: 9.2,
    lowestScore: 1.3,
    tagList: ['운영체제'],
    desc: '멀티 스레드의 공유 자원 문제가 생기는 예시와 멀티 프로세스의 공유 자원 문제가 생기는 예시를 각각 설명해주세요. 언제 공유자원문제가 발생할까요?',
    keywordList: ['키워드1', '키워드2', '키워드3', '키워드4'],
    answer:
      '멀티 스레드는 동일한 프로세스의 메모리를 공유하다보니 동시에 같은 변수에 접근할때 공유 자원 문제가 생겨요. 가장 유명한 예시로 각 스레드로 같은 변수를 증가시켰을때 원하지 않는 값이 나오지 않는 예시가 있습니다.멀티 프로세스에서는 메모리를 공유하지 않지만 CPU는 한번에 하나의 프로세스만 실행 가능합니다. 즉 CPU를 선점하기위해 서로 race condition이 생길 수도 있다는 말이죠. 추가적으로 프로세스는 서로 경쟁상대이기 때문에 교착상태를 일으킬 수 있습니다.',
  },
  {
    id: '18',
    title: '멀티 프로세스의 특징',
    numberSolved: 522323,
    averageScore: 6.8,
    highestScore: 9.2,
    lowestScore: 1.3,
    tagList: ['운영체제'],
    desc: '멀티 스레드의 공유 자원 문제가 생기는 예시와 멀티 프로세스의 공유 자원 문제가 생기는 예시를 각각 설명해주세요. 언제 공유자원문제가 발생할까요?',
    keywordList: ['키워드1', '키워드2', '키워드3', '키워드4'],
    answer:
      '멀티 스레드는 동일한 프로세스의 메모리를 공유하다보니 동시에 같은 변수에 접근할때 공유 자원 문제가 생겨요. 가장 유명한 예시로 각 스레드로 같은 변수를 증가시켰을때 원하지 않는 값이 나오지 않는 예시가 있습니다.멀티 프로세스에서는 메모리를 공유하지 않지만 CPU는 한번에 하나의 프로세스만 실행 가능합니다. 즉 CPU를 선점하기위해 서로 race condition이 생길 수도 있다는 말이죠. 추가적으로 프로세스는 서로 경쟁상대이기 때문에 교착상태를 일으킬 수 있습니다.',
  },
  {
    id: '19',
    title: '멀티 프로세스의 특징',
    numberSolved: 522323,
    averageScore: 6.8,
    highestScore: 9.2,
    lowestScore: 1.3,
    tagList: ['운영체제'],
    desc: '멀티 스레드의 공유 자원 문제가 생기는 예시와 멀티 프로세스의 공유 자원 문제가 생기는 예시를 각각 설명해주세요. 언제 공유자원문제가 발생할까요?',
    keywordList: ['키워드1', '키워드2', '키워드3', '키워드4'],
    answer:
      '멀티 스레드는 동일한 프로세스의 메모리를 공유하다보니 동시에 같은 변수에 접근할때 공유 자원 문제가 생겨요. 가장 유명한 예시로 각 스레드로 같은 변수를 증가시켰을때 원하지 않는 값이 나오지 않는 예시가 있습니다.멀티 프로세스에서는 메모리를 공유하지 않지만 CPU는 한번에 하나의 프로세스만 실행 가능합니다. 즉 CPU를 선점하기위해 서로 race condition이 생길 수도 있다는 말이죠. 추가적으로 프로세스는 서로 경쟁상대이기 때문에 교착상태를 일으킬 수 있습니다.',
  },
  {
    id: '21',
    title: '멀티 프로세스의 특징',
    numberSolved: 522323,
    averageScore: 6.8,
    highestScore: 9.2,
    lowestScore: 1.3,
    tagList: ['운영체제'],
    desc: '멀티 스레드의 공유 자원 문제가 생기는 예시와 멀티 프로세스의 공유 자원 문제가 생기는 예시를 각각 설명해주세요. 언제 공유자원문제가 발생할까요?',
    keywordList: ['키워드1', '키워드2', '키워드3', '키워드4'],
    answer:
      '멀티 스레드는 동일한 프로세스의 메모리를 공유하다보니 동시에 같은 변수에 접근할때 공유 자원 문제가 생겨요. 가장 유명한 예시로 각 스레드로 같은 변수를 증가시켰을때 원하지 않는 값이 나오지 않는 예시가 있습니다.멀티 프로세스에서는 메모리를 공유하지 않지만 CPU는 한번에 하나의 프로세스만 실행 가능합니다. 즉 CPU를 선점하기위해 서로 race condition이 생길 수도 있다는 말이죠. 추가적으로 프로세스는 서로 경쟁상대이기 때문에 교착상태를 일으킬 수 있습니다.',
  },
  {
    id: '22',
    title: '멀티 프로세스의 특징',
    numberSolved: 522323,
    averageScore: 6.8,
    highestScore: 9.2,
    lowestScore: 1.3,
    tagList: ['운영체제'],
    desc: '멀티 스레드의 공유 자원 문제가 생기는 예시와 멀티 프로세스의 공유 자원 문제가 생기는 예시를 각각 설명해주세요. 언제 공유자원문제가 발생할까요?',
    keywordList: ['키워드1', '키워드2', '키워드3', '키워드4'],
    answer:
      '멀티 스레드는 동일한 프로세스의 메모리를 공유하다보니 동시에 같은 변수에 접근할때 공유 자원 문제가 생겨요. 가장 유명한 예시로 각 스레드로 같은 변수를 증가시켰을때 원하지 않는 값이 나오지 않는 예시가 있습니다.멀티 프로세스에서는 메모리를 공유하지 않지만 CPU는 한번에 하나의 프로세스만 실행 가능합니다. 즉 CPU를 선점하기위해 서로 race condition이 생길 수도 있다는 말이죠. 추가적으로 프로세스는 서로 경쟁상대이기 때문에 교착상태를 일으킬 수 있습니다.',
  },
  {
    id: '23',
    title: '멀티 프로세스의 특징',
    numberSolved: 522323,
    averageScore: 6.8,
    highestScore: 9.2,
    lowestScore: 1.3,
    tagList: ['운영체제'],
    desc: '멀티 스레드의 공유 자원 문제가 생기는 예시와 멀티 프로세스의 공유 자원 문제가 생기는 예시를 각각 설명해주세요. 언제 공유자원문제가 발생할까요?',
    keywordList: ['키워드1', '키워드2', '키워드3', '키워드4'],
    answer:
      '멀티 스레드는 동일한 프로세스의 메모리를 공유하다보니 동시에 같은 변수에 접근할때 공유 자원 문제가 생겨요. 가장 유명한 예시로 각 스레드로 같은 변수를 증가시켰을때 원하지 않는 값이 나오지 않는 예시가 있습니다.멀티 프로세스에서는 메모리를 공유하지 않지만 CPU는 한번에 하나의 프로세스만 실행 가능합니다. 즉 CPU를 선점하기위해 서로 race condition이 생길 수도 있다는 말이죠. 추가적으로 프로세스는 서로 경쟁상대이기 때문에 교착상태를 일으킬 수 있습니다.',
  },
  {
    id: '24',
    title: '멀티 프로세스의 특징',
    numberSolved: 522323,
    averageScore: 6.8,
    highestScore: 9.2,
    lowestScore: 1.3,
    tagList: ['운영체제'],
    desc: '멀티 스레드의 공유 자원 문제가 생기는 예시와 멀티 프로세스의 공유 자원 문제가 생기는 예시를 각각 설명해주세요. 언제 공유자원문제가 발생할까요?',
    keywordList: ['키워드1', '키워드2', '키워드3', '키워드4'],
    answer:
      '멀티 스레드는 동일한 프로세스의 메모리를 공유하다보니 동시에 같은 변수에 접근할때 공유 자원 문제가 생겨요. 가장 유명한 예시로 각 스레드로 같은 변수를 증가시켰을때 원하지 않는 값이 나오지 않는 예시가 있습니다.멀티 프로세스에서는 메모리를 공유하지 않지만 CPU는 한번에 하나의 프로세스만 실행 가능합니다. 즉 CPU를 선점하기위해 서로 race condition이 생길 수도 있다는 말이죠. 추가적으로 프로세스는 서로 경쟁상대이기 때문에 교착상태를 일으킬 수 있습니다.',
  },
  {
    id: '25',
    title: '멀티 프로세스의 특징',
    numberSolved: 522323,
    averageScore: 6.8,
    highestScore: 9.2,
    lowestScore: 1.3,
    tagList: ['운영체제'],
    desc: '멀티 스레드의 공유 자원 문제가 생기는 예시와 멀티 프로세스의 공유 자원 문제가 생기는 예시를 각각 설명해주세요. 언제 공유자원문제가 발생할까요?',
    keywordList: ['키워드1', '키워드2', '키워드3', '키워드4'],
    answer:
      '멀티 스레드는 동일한 프로세스의 메모리를 공유하다보니 동시에 같은 변수에 접근할때 공유 자원 문제가 생겨요. 가장 유명한 예시로 각 스레드로 같은 변수를 증가시켰을때 원하지 않는 값이 나오지 않는 예시가 있습니다.멀티 프로세스에서는 메모리를 공유하지 않지만 CPU는 한번에 하나의 프로세스만 실행 가능합니다. 즉 CPU를 선점하기위해 서로 race condition이 생길 수도 있다는 말이죠. 추가적으로 프로세스는 서로 경쟁상대이기 때문에 교착상태를 일으킬 수 있습니다.',
  },
  {
    id: '26',
    title: '멀티 프로세스의 특징',
    numberSolved: 522323,
    averageScore: 6.8,
    highestScore: 9.2,
    lowestScore: 1.3,
    tagList: ['운영체제'],
    desc: '멀티 스레드의 공유 자원 문제가 생기는 예시와 멀티 프로세스의 공유 자원 문제가 생기는 예시를 각각 설명해주세요. 언제 공유자원문제가 발생할까요?',
    keywordList: ['키워드1', '키워드2', '키워드3', '키워드4'],
    answer:
      '멀티 스레드는 동일한 프로세스의 메모리를 공유하다보니 동시에 같은 변수에 접근할때 공유 자원 문제가 생겨요. 가장 유명한 예시로 각 스레드로 같은 변수를 증가시켰을때 원하지 않는 값이 나오지 않는 예시가 있습니다.멀티 프로세스에서는 메모리를 공유하지 않지만 CPU는 한번에 하나의 프로세스만 실행 가능합니다. 즉 CPU를 선점하기위해 서로 race condition이 생길 수도 있다는 말이죠. 추가적으로 프로세스는 서로 경쟁상대이기 때문에 교착상태를 일으킬 수 있습니다.',
  },
  {
    id: '27',
    title: '멀티 프로세스의 특징',
    numberSolved: 522323,
    averageScore: 6.8,
    highestScore: 9.2,
    lowestScore: 1.3,
    tagList: ['운영체제'],
    desc: '멀티 스레드의 공유 자원 문제가 생기는 예시와 멀티 프로세스의 공유 자원 문제가 생기는 예시를 각각 설명해주세요. 언제 공유자원문제가 발생할까요?',
    keywordList: ['키워드1', '키워드2', '키워드3', '키워드4'],
    answer:
      '멀티 스레드는 동일한 프로세스의 메모리를 공유하다보니 동시에 같은 변수에 접근할때 공유 자원 문제가 생겨요. 가장 유명한 예시로 각 스레드로 같은 변수를 증가시켰을때 원하지 않는 값이 나오지 않는 예시가 있습니다.멀티 프로세스에서는 메모리를 공유하지 않지만 CPU는 한번에 하나의 프로세스만 실행 가능합니다. 즉 CPU를 선점하기위해 서로 race condition이 생길 수도 있다는 말이죠. 추가적으로 프로세스는 서로 경쟁상대이기 때문에 교착상태를 일으킬 수 있습니다.',
  },
  {
    id: '28',
    title: '멀티 프로세스의 특징',
    numberSolved: 522323,
    averageScore: 6.8,
    highestScore: 9.2,
    lowestScore: 1.3,
    tagList: ['운영체제'],
    desc: '멀티 스레드의 공유 자원 문제가 생기는 예시와 멀티 프로세스의 공유 자원 문제가 생기는 예시를 각각 설명해주세요. 언제 공유자원문제가 발생할까요?',
    keywordList: ['키워드1', '키워드2', '키워드3', '키워드4'],
    answer:
      '멀티 스레드는 동일한 프로세스의 메모리를 공유하다보니 동시에 같은 변수에 접근할때 공유 자원 문제가 생겨요. 가장 유명한 예시로 각 스레드로 같은 변수를 증가시켰을때 원하지 않는 값이 나오지 않는 예시가 있습니다.멀티 프로세스에서는 메모리를 공유하지 않지만 CPU는 한번에 하나의 프로세스만 실행 가능합니다. 즉 CPU를 선점하기위해 서로 race condition이 생길 수도 있다는 말이죠. 추가적으로 프로세스는 서로 경쟁상대이기 때문에 교착상태를 일으킬 수 있습니다.',
  },
  {
    id: '29',
    title: '멀티 프로세스의 특징',
    numberSolved: 522323,
    averageScore: 6.8,
    highestScore: 9.2,
    lowestScore: 1.3,
    tagList: ['운영체제'],
    desc: '멀티 스레드의 공유 자원 문제가 생기는 예시와 멀티 프로세스의 공유 자원 문제가 생기는 예시를 각각 설명해주세요. 언제 공유자원문제가 발생할까요?',
    keywordList: ['키워드1', '키워드2', '키워드3', '키워드4'],
    answer:
      '멀티 스레드는 동일한 프로세스의 메모리를 공유하다보니 동시에 같은 변수에 접근할때 공유 자원 문제가 생겨요. 가장 유명한 예시로 각 스레드로 같은 변수를 증가시켰을때 원하지 않는 값이 나오지 않는 예시가 있습니다.멀티 프로세스에서는 메모리를 공유하지 않지만 CPU는 한번에 하나의 프로세스만 실행 가능합니다. 즉 CPU를 선점하기위해 서로 race condition이 생길 수도 있다는 말이죠. 추가적으로 프로세스는 서로 경쟁상대이기 때문에 교착상태를 일으킬 수 있습니다.',
  },
];

export { listData };
