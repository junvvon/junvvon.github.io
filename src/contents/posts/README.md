# 에러 처리하기

C++는 이렇게 **예상치 못한 예외적인 상황**에 대처하도록 **익셉션**(**예외**)이라는 기능을 제공한다.

## 에러와 예외

### 익셉션의 정체

**익셉션**이란 코드에서 발생한 ’예외, 상황이나 에러가 코드의 정상적인 실행 흐름에 퍼지지 않도록 알려주는 메커니즘이다. 익셉션 메커니즘을 적용하면 에러가 발생한 코드는 익셉션을 **던지고** _^throw^_ (**발생시키고**), 이를 처리하는 코드는 발생한 익셉션을 **받아서 처리** _^catch^_ 하는 식으로 작동한다. 익셉션을 처리하는 과정은 기존 프로그램과 달리 순차적으로 실행되지 않는다. 어떤 코드가 익셉션을 던지면 프로그램의 정상 실행 흐름은 잠시 멈추고 **익셉션 핸들러** _^exception^_ _^handler^_ **예외 처리기**)로 제어권을 넘긴다. 이때 핸들러의 위치는 다양하다.

### C++에서 익셉션이 필요한 이유

C++에서 에러를 표시하는 방법들이 표준처럼 굳어진 방식이 있다. 이 방식을 C++에서도 그대로 적용한 사례도 많다. 하지만 이러한 일관성 없이 나름대로 정한 관례대로 구현한 함수들이 뒤섞이면 문제가 발생할 수 있다. 호출한 함수가 예상과 다른 방식으로 코드를 리턴하기 때문이다.

또 다른 문제는 C++ 함수는 리턴 타입을 하나만 지정할 수 있다는 점이다. 그래서 에러와 결과를 모두 리턴하려면 다른 수단을 마련해야 한다. 한 가지 방법은 값을 두 개 이상 저장할 수 있는 std::pair나 std::tuple에 결과와 에러를 하나로 묶어서 리턴하는 것이다. 다른 방법은 여러 값을 담는 struct나 클래스를 직접 정의해서 함수의 결과와 에러 상태를 그 struct나 클래스의 인스턴스로 만들어서 리턴하는 것이다. 에러나 리턴값을 레퍼런스 매개변수로 전달하거나 리턴값 중 어느 하나로 표현하는 방법도 있다. 어떤 방식을 사용하든지 리턴값을 직접 보고 에러 발생 여부를 확인하는 작업은 함수를 호출한 측의 몫이다. 다른 곳에서 에러를 처리한다면 그곳으로 반드시 전달해야 하는데, 이렇게 하면 에러에 대한 핵심 세부사항을 놓치기 쉽다.

익셉션 메커니즘을 활용하면 에러를 쉽고 일관성 있고 안전하게 처리할 수 있다. 기존에 C나 C++에서 활용하던 비공식 에러 처리 가법에 비해 익셉션 메커니즘이 뛰어난 점은 다음과 같다.

- 에러를 리턴값으로 표현하면 호출한 측에서 깜박하고 리턴값을 검사하지 않거나 상위 함수로 전달하지 못 할 수 있다. C++17의 [[nodiscard]] 어트리뷰트를 활용하면 리턴 코드를 무시하지 못하게 설정할 수 있긴 하지만 완벽한 해결책이라고 볼 수는 없다. 반면 익셉션은 깜박 잊고 처리하지 않거나 무시할 수 없다. 발생한 익셉션을 처리하지 않으면 프로그램이 즉시 멈추가 때문이다.

- 에러를 정수 타입 리턴 코드로 표현하면 구체적인 정보를 담기 힘들다. 반면 익셉션은 에러를 처리하는 데 필요한 정보를 마음껏 담을 수 있다. 또한 익셉션은 에러뿐만 아니라 다른 부가 정보도 담을 수 있다. 물론 익셉션 메커니즘을 남용한다고 보는 프로그래머도 많다.

- 익셉션 메커니즘은 콜 스택의 중간 단계를 건너뛸 수 있다. 다시 말해 여러 함수가 연속적으로 호출됐을 때 중간에 호출된 함수에서 에러를 처리하지 않고 콜 스택의 최상위 함수에서 에러를 처리하게 만들 수 있다. 반면 리턴 코드를 활용하면 함수 호출의 각 단계마다 반드시 에러 코드를 다음 단계로 전달하도록 작성해야 한다.

요즘은 드물지만 예전 컴파일러에서는 에러를 처리하는 모든 함수에 오버헤드가 발생한느 경우가 많았다. 최신 컴파일러는 익셉션이 발생하지 않으면 오버헤드가 거의 없고, 익셉션이 실제로 발생했을 때만 약간의 오버헤드가 발생하도록 잘 타협하고 있다. 익셉션은 말 그대로 예외이기 때문에 이렇게 상황에 따라 오버헤드를 최소화하도록 처리하는 것이 합리적이다.

### 바람직한 에러 처리 방식

익셉션을 활용하면 에러 처리 기능을 체계적으로 구현하면 단점보다 장점이 많다. 따라서 이 장에서는 익셉션 메커니즘을 구체적으로 살펴본다. 또한 표준 라이브러리나 부스트 _^Boost^_ 같은 유명한 라이브러리는 익셉션을 적극 활용하고 있다. 따라서 이런 라이브러리를 사용하려면 익셉션을 다루는 방법을 익혀둬야 한다.

## 익셉션 처리 과정

### 익셉션 던지고 받기

프로그램에 익셉션을 구현하는 코드는 두 부분으로 나뉜다. 하나는 발생한 익셉션을 처리하는 try/catch 문이고, 다른 하나는 익셉션을 던지는 throw 문이다.

try/catch 문은 다음과 같이 구성된다.

```c++
try {
		// 익셉션이 발생할 수 있는 코드
	} catch (익셉션_타입1 익셉션_이름) {
		// 익셉션_타입1 익셉션을 처리하는 코드
	} catch (익셉션_타입2 익셉션_이름) {
		// 익셉션_타입2 익셉션을 처리하는 코드
}
```

예외 상황이 발생할 수 있는 코드에 throw 문으로 익셉션을 직접 던져도 된다. 또한 throw 문으로 익셉션을 직접 던지거나 익셉션을 던지는 함수를 호출하는 문장이 담긴 함수를 호출할 수도 있다. 후자의 경우 여러 단계의 호출 과정을 거칠 수도 있다.

익셉션이 발생하지 않으면 catch 블록은 실행되지 않고, try 문의 마지막 문장을 실행하고 나서 try/catch 문을 빠져나와 바로 다음 문장을 실행한다.

반면 익셉션이 발생하면 throw 도는 throw 문이 담긴 함수를 호출하는 문장의 바로 뒤에 있는 코드는 실행되지 않고, 발생한 익셉션의 타입에 맞는 catch 블록으로 실행 흐름이 바뀐다.

catch 블록에서 더 이상 실행 흐름이 바뀌지 않는다면, 다시 말해 어떤 값을 리턴하거나, 다른 익셉션을 던지거나, 발생한 익셉션을 그대로 다시 던지는 등의 작업을 수행하지 않으면 방금 실행한 catch 블록의 마지막 문장을 끝낸 후 try/catch 문을 빠져나와 그다음 코드를 실행한다.

익셉션 처리 코드를 작성하는 방법을 구체적으로 살펴보기 위해 다음과 같이 0으로 나누는 상황을 감시하는 함수를 만들어보자. 이 코드는 \<stdexcept> 헤더에 정의된 std::invalid_argument라는 익셉션을 던진다.

```c++
double SafeDivide(double num, double den)
{
	if (den == 0)
	throw invalid_argument("Divide by zero");
	return num / den;
}

int main ()
{
	try {
		cout << SafeDivide(5, 2) << endl;
		cout << SafeDivide(10, 0) << endl;
		cout << SafeDivide(3, 3) << endl;
	} catch (const invalid_argument& e) {
		cout << "Caught exception: " << e.what() << endl;
	}
	return 0;
}
```

여기서 throw는 C++에서 정의된 키워드로서, 익셉션을 던지려면 반드시 이 키워드를 써야 한다. throw 문에 나온 invalid_argument ( )는 던질 invalid_argument 타입의 익셉션 객체를 생성한다. invalid_argument는 C++ 표준 라이브러리에서 제공하는 표준 익셉션 중 하나다. 표준 라이브러리에 정의된 익셉션은 일정한 계층을 형성하고 있다. 이 계층 구조에 속한 클래스마다 what ( ) 메서드가 있는데, 이 메서드는 익셉션을 표현하는 const char\* 스트링을 리턴한다. 이 값은 익셉션 생성자의 인수로 전달하는 방식으로 설정한다.

### 익셉션 타입

던질 수 있는 익셉션의 타입에는 제한이 없다. 간단한 int 타입 객체를 던져도 된다. 또는 다음과 같이 C 스타일 스트링인 const char\* 타입으로 던져도 된다. 스트링에 예외 상황에 대한 정보를 담을 때 유용한 기법이다.

```c++
vector<int> readIntegerFile(string_view fileName)
{
	ifstream inputstream(fileName.data());
	if (inputstream.fail()) {
		// 파일 열기 실패: 익셉션을 던진다.
		throw "Unable to open file";
	}
	// 나머지 코드 생략
}
```

const char\* 타입의 익셉션을 받는 부분은 다음과 같이 그 값을 출력할 수 있다.

```c++
try {
	myInts = readIntegerFile(fileName);
} catch (const char* e) {
	cerr << e << endl;
	return 1;
}
```

하지만 예제처럼 기본 타입을 사용하기보다는 타입을 새로 정의하는 것이 바람직한데 그 이유는 다음과 같다.

- 객체의 클래스 이름에 예외 상황에 대한 정보를 드러낼 수 있다.

- 예외 상황의 종류뿐만 아니라 다른 정보도 담을 수 있다.

C++ 표준 라이브러리에 미리 정의돼 있는 익셉션 클래스를 활용할 수도 있고, 익셉션 클래스를 직접 정의할 수도 있다. 구체적인 방법은 뒤에서 소개한다.

### 익셉션 객체를 const 레퍼런스로 받기

exception 객체를 던질 때 catch 문을 다음과 같이 작성했다.

```c++
} catch (const exception& e) {
```

그런데 익셉션 객체를 const 레퍼런스로 받지 않아도 된다. 다음과 같이 그냥 값으로 받아도 된다.

```c++
} catch (exception e) {
```

또는 non-const 레퍼런스로 받아도 된다.

```c++
} catch (exception& e) {
```

또한 const char\* 타입으로 던지는 예제에서 본 것처럼 포인터 타입을 던져도 된다.

> 익셉션 객체는 항상 const 레퍼런스로 받는 것이 좋다. 익셉션 객체를 값으로 받으면 객체 슬라이싱이 발생한다.

### 여러 가지 익셉션 던지고 받기

readIntegerFile ( )에서는 파일 열기 실패 말고도 다른 문제가 얼마든지 발생할 수 있다. 파일에서 데이터를 읽는 도중 포맷에 문제가 있어서 에러가 발생할 수도 있다. 이처럼 파일 열기에 실패하거나 데이터 읽기에 오류가 발생할 때 익셉션을 던지도록 readIntegerFile ( )들 다음과 같이 수정할 수 있다오 이번에는 exception을 상속한 runtime_error로 구현한다. 이 타입은 생성자를 호출할 때 예외에 대한 설명을 지정할 수 있다. runtime_error 익셉션 클래스는 \<stdexcept> 헤더에 정의돼 있다.

```c++
vector<int> readIntegerFile(string_view fileName)
{
	ifstream inputStream(fileName.data());
	if (inputstream.fail()) {
		// 파일 열기에 실패한 경우 : 익셉션을 던진다.
		throw runtime_error("Unable to open the file.");
	}

	// 파일에서 정수를 하나씩 읽어 벡터에 추가한다.
	vector<int> integers;
	int temp;
	while (inputstream >> temp) {
    integers.push_back(temp);
	}

	if (linputStream.eof()) {
		// 파일 끝(EOF)에 도달하지 않았다.
		// 다시 말해 파일을 읽는 도중 에러가 발생한다.
		// 따라서 익셉션을 던진다.
		throw runtime_error("Error reading the file.");
	}
	return integers;
}
```

앞에서 main ( ) 함수를 작성할 때 catch 구문이 runtime_error의 베이스 클래스인 exception 타입을 받도록 지정해뒀기 때문에 여기서는 변경할 필요 없다. 이렇게 하면 catch 문은 두 가지 상황을 모두 처리하게 된다.

```c++
try {
	myInts = readIntegerFile(fileName);
} catch (const exception& e) {
	cerr << e.what() << endl;
	return 1;
}
```

이렇게 하지 않고 readIntegerFile ( )에서 익셉션을 두 가지 타입으로 따로 나눠서 던져도 된다. 다음 코드를 보면 파일을 열 수 없으면 invalid_argument 익셉션을 던지고, 정수를 읽을 수 없으면 runtime_error 익셉션을 던진다. invalid_argument와 runtime_error는 둘 다 C++ 표준 라이브러리인 \<stdexcept> 헤더 파일에 정의돼 있다.

```c++
vector<int> readIntegerFile(string_view fileName)
{
	ifstream inputStream(fileName.data());
	if (inputstream.fail()) {
		// 파일 열기에 실패한 경우 : 익셉션을 던진다.
		throw invalid_argument("Unable to open the file.");
	}

	// 파일에서 정수를 하나씩 읽어 벡터에 추가한다.
	vector<int> integers;
	int temp;
	while (inputStream >> temp) {
		integers.push_back(temp);
	}

	if (!inputStream.eof()) {
		// 파일 끝(EOF)에 도달하지 않았다.
		// 다시 말해 파일을 읽는 도중 에러가 발생한다.
		// 따라서 익셉션을 던진다.
		throw runtime_error("Error reading the file.");
	}
	return integers;
}
```

invalid_argument와 runtime_error에는 public 디폴트 생성자가 없고 string 인수를 받는 생성자만 있다.

이제 main ( )에 invalid_argument를 받는 catch 문과 runtime_error를 받는 catch 문을 따로 작성한다.

```c++
try {
	myInts = readIntegerFile(fileName);
} catch (const invalid_argument& e) {
	cerr << e.what() << endl;
	return 1;
} catch (const runtime_error& e) {
	cerr << e.what() << endl;
	return 2;
}
```

try 블록에서 익셉션이 발생하면 컴파일러는 그 익셉션 타입과 일치하는 catch 문(핸들러)을 선택한다. 그러므로 readIntegerFile ( )에서 파일을 열 수 없으면 invalid_argument 객체를 던지고, main ( )의 첫 번째 catch 문에서 이를 처리한다. 반면 readIntegerFile ( )에서 파일을 읽는 데 문제가 발생하면 runtime_error를 던지고, main ( )의 두 번째 catch 문에서 이를 처리한다.

#### 1. 익셉션 타입 매칭과 cosnt

처리하려는 익셉션 타입에 const가 지정됐는지 여부는 매칭 과정에 영향을 미치지 않는다. 다시 말해 다음 문장은 runtime_error 타입에 속하는 모든 익셉션을 매칭한다.

```c++
} catch (const runtime_error& e) {
```

다음 문장도 마찬가지로 runtime_error 타입에 속하는 모든 익셉션을 매칭한다.

```c++
} catch (runtime_error& e) {
```

#### 2. 모든 익셉션 매칭하기

catch 문에서 모든 종류의 익셉션에 매칭하려면 다음과 같이 특수한 문법으로 작성한다.

```c++
try {
	myInts = readIntegerFile(fileName);
} catch (...) {
	cerr << "Error reading or opening file " << fileName << endl;
	return 1;
}
```

점 세 개를 연달아 쓴 부분은 오타가 아니다. 모든 익셉션 타입에 매칭하라는 와일드카드다. 문서에서 익셉션 타입이 정확히 나와 있지 않아서 모든 익셉션을 받게 만들 때 유용하다. 하지만 발생 가능한 익셉션을 확실히 알 수 있다면 이렇게 구현하지 않는 것이 좋다. 필요 없는 익셉션까지 처리하기 때문이다. 항상 익셉션 타입을 구체적으로 지정해서 꼭 필요한 익셉션만 받도록 작성하는 것이 바람직하다.

모든 종류의 익셉션을 매칭하는 catch ( ... ) 구문은 디폴트 catch 핸들러를 구현할 때도 유용하다. 익셉션이 발생하면 catch 핸들러가 코드에 나열된 순서대로 검색하면서 조건에 맞는 것을 실행한다. 다음 예는 invalid_argument와 runtim_error만 catch 문을 별도로 작성하고, 나머지 익셉션은 디폴트 catch 핸들러로 처리하는 방법을 보여준다.

```c++
try {
	// 익셉션이 발생할 수 있는 코드
} catch (const invalid_argument& e) {
	// invalid_argument 익셉션을 처리하는 핸들러 코드
} catch (const runtime_error& e) {
	// runtime_error 익셉션을 처리하는 핸들러 코드
} catch (...) {
	// 나머지 모든 익셉션을 처리하는 핸들러 코드
}
```

### 처리하지 못한 익셉션

프로그램에서 발생한 익셉션을 처리하는 곳이 하나도 없으면 프로그램이 종료돼버린다. 그래서 미처 처리하지 못한 익셉션을 모두 잡도록 main ( ) 함수 전체를 try/catch 구문으로 감싸는 패턴을 많이 사용한다. 예를 들면 다음과 같다.

```c++
try {
	main(argc, argv);
} catch (...) {
	// 에러 메시지를 출력한 뒤 프로그램을 종료한다.
}
```

그런데 이렇게 하면 뭔가 아쉬운 점이 있다. 애초에 익셉션을 사용하는 이유는 바람직하지 않은 예외 상황이 발생했을 때 대처할 기회를 얻는 데 있기 때문이다.

> **반드시 프로그램에서 발생할 수 있는 익셉션을 모두 잡아서 처리하도록 작성한다.**

catch 구문으로 처리하지 못한 익셉션이 남아 있다면 프로그램을 다르게 실행하도록 구현하는 방법도 있다. 예를 들어 프로그램이 잡지 못한 익셉션을 만나면 terminate ( ) 함수를 호출하게 만들 수 있다. 이 함수는 C++에서 기본으로 제공하며, 내부적으로 \<cstdlib> 헤더에 정의된 abort ( ) 함수를 호출해서 프로그램을 죽인다. 또는 set_terminate ( )에 인수를 받지 않고 리턴값도 없는 콜백 함수를 포인터로 지정하는 방식으로 terminate_handler를 직접 구현해도 된다. terminate ( ), set_terminate ( ), terminate_handler는 모두 \<excepotion> 헤더에 선언돼 있다. 사용법은 다음과 같다.

```c++
try {
	main(argc, argv);
} catch (...) {
	if (terminate_handler != nullptr) {
		terminate_handler();
	} else {
		terminate();
	}
}
// 정상 종료 코드
```

아쉽지만 여기서 지정한 콜백 함수도 결국 에러를 무시하지 못하고 프로그램을 종료시킨다. 그래도 최소한 종료 직전에 유용한 정보를 담은 에러 메시지를 출력할 기회는 있다. 예를 들어 다음 코드를 보면 main ( )은 커스텀 콜백 함수인 myTerminate ( )를 terminate_handler로 지정했다. 이 핸들러는 readIntegerFile ( )이 던지는 익셉션을 제대로 처리하지 않고 그냥 에러 메시지만 출력한 뒤 exit ( )를 호출해서 프로그램을 종료시킨다. exit ( ) 함수는 프로세스를 종료하는 방식으로 표현하는 정숫값을 인수로 받는다. 이렇게 지정한 값은 OS로 전달된다.

```c++
void myTerminate()
{
	cout << "Uncaught exception!" << endl;
	exit(1);
}

int main()
{
	set_terminate(myTerminate);

	const string fileName = "IntegerFile.txt";
	vector<int> myInts = readIntegerFile(fileName);

	for (const auto& element : myInts) {
		cout << element << "
	}
	cout << endl;
	return 0;
}
```

여기에는 나오지 않았지만 set_terminate ( ) 함수로 새로운 terminate_handler를 지정하면 기존에 설정된 핸들러를 리턴하다. terminate_handler는 프로그램 전체에서 접근할 수 있기 때문에 처리할 일이 끝나면 이를 리셋하는 것이 바람직하다. 이 예제에서는 terminate_handler를 사용하는 다른 코드가 없기 때문에 리셋하지 않았다.

set_terminate ( )는 반드시 알아야 할 기능 중 하나지만, 에러 처리에 가장 효과적인 수단은 아니다. 그보다는 처리할 익셉션을 try/catch 구문에 구체적으로 지정해서 꼭 필요한 익셉션만 제대로 처리하는 것이 바람직하다.

### noexcept

기본적으로 함수가 던질 수 있는 익셉션의 종류에는 제한이 없다. 하지만 함수에 noexcept 키워드를 지정해서 어떠한 익셉션도 던지지 않는다고 지정할 수는 있다. 예를 들어 앞에서 본 readIntegerFile ( ) 함수에 noexcept를 지정하면 익셉션을 하나도 던지지 않는다.

```c++
vector<int> readIntegerFile(string_view fileName) noexcept;
```

> noexcept 키워드가 지정된 함수는 익셉션을 던지지 않는다.

noexcept 키워드가 지정된 함수에 익셉션을 던지는 코드가 있으면 C++ 런타임은 terminate ( )를 호출해서 프로그램을 종료시킨다.

파생 클래스에서 virtual 메서드를 오버라이드할 때 베이스 클래스에 정의된 메서드에 noexcept가 지정되지 않았더라도 오버라이드하는 메서드 noexcept를 지정할 수 있다. 하지만 그 반대로는 할 수 없다.

### throw 리스트(현재 지원 중단 _및_ 삭제됨)

이전 버전의 C++에서는 함수나 메서드에서 던질 수 있는 익셉션을 지정할 수 있다. 이를 **throw 리스트** 또는 **익셉션 명세** _^exception^_ _^specification^_ 라 부른다.

> **C++11 에서는 익셉션 명시 기능에 대한 지원이 폐기됐고 C++17부터는 완전히 삭제됐다. 단, noexcept와 throw ( )는 남아 있다. throw ( )는 실질적으로 noexcept와 같다.**

C++17부터 익셉션 명세 기능이 완전히 삭제되었지만 레거시 코드가 얼마든지 있기 때문에 간략히 소개한다. 앞에서 작성한 readIntegerFile ( )에 익셉션 명세를 지정하려면 다음과 같이 수정한다.

```c++
vector<int> readIntegerFile(string_view fileName)
	throw(invalid_argument, runtime_error)
{
	// 나머지 코드는 그대로다.
}
```

함수가 익셉션 명세에 없는 익셉션을 던지면 C++ 런타임은 std::unexcepted ( )를 호출한다. 이 메서드는 기본적으로 std::terminate ( )를 호출해서 프로그램을 종료한다.

## 익셉션과 다형성

던질 수 있는 익셉션 타입에는 제한이 없다. 하지만 대부분 클래스로 정의한다. 익셉션 타입을 클래스로 정의하면 계층 구조를 형성할 수 있기 때문에 익셉션을 처리하는 코드에서 다형성을 활용할 수 있다.

### 표준 익셉션 클래스의 계층 구조

앞에서 본 exception, runtime_error, invalid_argument는 모두 C++ 표준 익셉션 클래스 타입이다. C++ 표준 라이브러리에서 던지는 익셉션 객체의 클래스는 모두 표준 익셉션 클래스의 계층 구조에 속한다. 여기 나온 클래스는 모두 what ( ) 메서드를 가지고 있다. 이 메서드는 익셉션을 표혀하는 const char\* 타입의 스트링을 리턴하며, 에러 메시지 출력에 활용할 수 있다.

익셉션 클래스는 대부분 what ( ) 메서드가 리턴할 스트링을 생성자의 인수로 지정해야 한다. 베이스 클래스인 exception은 반드시 생성자에 이 값을 전달해야 한다. 그래서 앞에 나온 예제에서 runtime_error나 invalid_argument를 생성할 때 스트링 인수를 전달했다. 이번에는 readIntegerFile ( )에서 에러 메시지를 만들 때 파일 이름도 함께 표시하도록 수정해보자. 이때 표준 사용자 정의 리터럴인 ’s'를 이용하여 스트링 리터럴을 std：:string으로 만든다.

```c++
vector<int> readIntegerFile(string_view fileName)
{
	ifstream inputStream(fileName.data());
	if (inputstream.fail()) {
		// 파일 열기에 실패한 경우 : 익셉션을 던진다.
		const string error = "Unable to open the file "s + fileName.data();
		throw invalid_argument(error);
	}

	// 파일에서 정수를 하나씩 읽어 벡터에 추가한다.
	vector<int> integers;
	int temp;
	while (inputstream >> temp) {
    integers.push_back(temp);
	}

	if (linputStream.eof()) {
		// 파일 끝(EOF)에 도달하지 않았다.
		// 다시 말해 파일을 읽는 도중 에러가 발생한다.
		// 따라서 익셉션을 던진다.
		const string error = "Unable to read file "s + fileName.data();
		throw runtime_error(error);
	}
	return integers;
}

int main()
{
	// 이전 코드 생략
	try {
		myInts = readIntegerFile(fileName);
  } catch (const invalid_argument& e) {
    cerr << e.what() << endl;
		return 1;
	} catch (const runtime_error& e) {
    cerr << e.what() << endl;
		return 2;
	}
	// 나머지 코드 생략
}
```

### 클래스 계층 구조에서 정확한 익셉션 타입 선택하기

익셉션 타입을 클래스 계층으로 구성하면 catch 구문에서 다형성을 활용할 수 있다. 예를 들어 위 예제의 main ( ) 함수에서 readIntegerFile ( )을 호출한 뒤 나오는 두 catch 구문은 인수 타입만 다르고 동작은 똑같다. invalid_argument와 runtime_error는 모두 exception을 상속하기 때문에 두 catch 문을 다음과 같이 exception 타이의 인수를 받는 하나의 catch 문으로 합칠 수 있다.

```c++
try {
	myInts = readIntegerFile(fileName);
} catch (const exception& e) {
  cerr << e.what() << endl;
  return 2;
}
```

이렇게 catch 구문이 인수를 exception 레퍼런스로 받으면 invalid_argument와 runtime_error뿐만 아니라 exception을 상속한 모든 파생 클래스 타입을 인수로 받을 수 있다. 단. 익셉션 계층에서 베이스로 올라갈수록 에러를 구체적으로 처리하기 힘들어진다. 일반적으로 catch 문에서 처리할 추상화 수준에 최대한 맞게 익셉션 타입을 지정한는 것이 바람직하다.

> **catch 구문에 다형성을 적용하려면 반드시 인수를 레퍼런스 타입으로 받아야 한다. 값으로 받느면 슬라이싱이 발생해서 객체 정보가 손상될 수 있다.**

다형성을 이용한 catch 구문이 여러 개라면 코드에 나온 순서대로 매칭된다. 다시 말해 가장 먼저 매칭되는 구문으로 결정된다. 앞에 나온 catch 문이 뒤에 나온 catch 문보다 추상적이라면(클래스 계층에서 위쪽에 있다면) 앞의 것을 먼저 선택한다. 따라서 구체적인 타입을 뒤에 적으면 한 번도 실행되지 않는다. 예를 들어 readIntegerFile ( )에서 던지는 invalid_argument를 꼭 잡아야 하는데, 다른 예외도 놓치지 않도록 가장 포괄적인 exception을 받는 catch 문도 넣을 때는 다음과 같이 구체적인 타입(invalid_argument)의 catch 문을 앞에 적는다.

```c++
try {
	myInts = readIntegerFile(fileName);
} catch (const invalid_argument& e) { // 파생 클래스를 먼저 적는다.
	// 파일 이름이 잘못된 경우를 처리한다.
} catch (const exception& e) { // exception 타입을 처리하는 코드를 그 뒤에 적는다.
  cerr << e.what() << endl;
	return 1;
}
```

첫 번째 catch 문은 invalid_argument 타입을 처리하고, 두 번째 catch 문은 exception 타입에 속한 모든 익셉션을 잡는다. 그런데 다음과 같이 여기 나온 두 catch 문의 순서를 바꾸면 실행 결과가 달라진다.

```c++
try {
	myInts = readIntegerFile(fileName);
} catch (const exception& e) { // 베이스 클래스를 먼저 잡으면 의도와 달리 실행된다.
  cerr << e.what() << endl;
	return 1;
} catch (const invalid_argument& e) {
	// 파일 이름이 잘못된 경우를 처리한다.
}
```

이렇게 하면 exception을 상속하는 익셉션은 모두 첫 번째 catch 문에서 처리되기 때문에 두 번째 catch 문은 한 번도 실행되지 않는다. 이렇게 작성하면 경고 메시지를 출력하는 컴파일러도 있지만, 완전히 믿을 수는 없다.

### 익셉션 클래스 직접 정의하기

익셉션 클래스를 직접 정의하면 다음 두 가지 장점이 있다.

1. C++ 표준 라이브러리는 익셉션을 몇 가지 종류만 제공한다. 익셉션 클래스를 직접 정의하면 runtime_error처럼 광범위한 이름 대신 작성한 프로그램에서 발생하는 에러에 최대한 가까운 이름으로 표현할 수 있다.

2. 원하는 정보를 익셉션에 얼마든지 추가할 수 있다. 표준 라이브러리에서 제공하는 익셉션은 에러 스트링만 넣을 수 있다.

익셉션을 직접 정의할 때는 반드시 표준 exception 클래스를 직접 또는 간접적으로 상속하는 것이 좋다. 프로젝트 구성원이 모두 이 원칙을 따르면(그리고 이 원칙을 따르지 않는 서드파티 라이브러리가 없다면) 프로그램에서 발생하는 익셉션이 모두 exception을 상속하게 만들 수 있다. 이렇게 하면 에러 처리 코드에서 다형성을 이용하기 훨씬 쉽다.

익셉션으로 사용할 클래스를 정의할 때 적용하면 좋은 팁이 하나 있다. 익셉션이 발생하면 그 익셉션 객체를 이동 생성자나 복제 생성자로 이동하거나 복제하게 된다. 따라서 익셉션으로 사용할 클래스를 정의할 때는 반드시 객체를 복제하거나 이동할 수 있게 만들어야 한다. 다시 말해 동적 할당 메모리를 사용한다면 클래스에 소멸자뿐만 아니라 복제 생성자와 복제 대입 연산자 그리고 이동 생성자와 이동 대입 연산자도 함께 정의한다.

> **익셉션 객체는 최소 한 번 이상 이동하거나 복제된다.**

익셉션을 레퍼런스로 받지 않고 값으로 받으면 복제가 여러 번 발생할 수 잇다.

> 익셉션 객체를 레퍼런스(기왕이면 const 레퍼런스)로 받으면 쓸데 없는 복제 연산을 방지할 수 있다.

### 중첩된 익셉션

앞서 발생한 익셉션을 처리하는 도중에 또 다른 에러가 발생해서 새로운 익셉션이 전달될 수 있다. 아쉽게도 이렇게 중간에 익셉션이 발생하면 현재 처리하고 있던 익셉션 정보가 사라진다. 이를 해결하기 위해 C++는 먼저 잡은 익셉션을 새로 발생한 익셉션의 문맥 안에 포함시키는 **중첩된 익셉션** _^nested^_ _^exception^_ 이라는 기능을 제공한다. 이 기능을 다음 상황에서도 활용할 수 있다. 현재 구현하는 프로그램에서 A 타입 익셉션을 던지는 서드파티 라이브러리의 함수를 사용하는데, 현재 작성하는 프로그램에서는 B 타입 익셉션만 처리하게 만들고 싶을 수 있다. 이럴 때는 서드파티 라이브러리에서 발생하는 익셉션을 모두 B 타입 안에 중첩시키면 된다.

어떤 익셉션을 처리하는 catch 문에서 새로운 익셉션을 던지고 싶다면 std::throw_with_nested ( )를 사용하면 된다. 나중에 발생한 익셉션을 처리하는 catch 문에서 먼저 발생했던 익셉션을 접근할 때는 dynamic_cast ( )를 이용하면 된다. 이때 먼저 발생한 익셉션은 nested_exception으로 표현한다. 구체적인 예를 통해 살펴보자. 먼저 다음과 같이 exception을 상속하고, 생성자에서 스트링을 인수로 받는 MyException 클래스를 정의한다.

```c++
class MyException : public std::exception
{
	public:
		MyException(string_view message) : mMessage(message) {}
		virtual const char* what() const noexcept override {
			return mMessage.c_str();
		}

  private:
		string mMessage;
};
```

먼저 발생한 익셉션을 처리하다가 새로운 익셉션을 던져야 하는데 그 안에 앞서 발생한 익셉션을 담아서 던지려면 std::throw_with_nested ( ) 함수를 호출해야 한다. 다음 코드에 나온 doSomething ( ) 함수에서 runtime_error를 던지는데 바로 다음나온 catch 핸들러가 이를 잡아서 처리한다 이 핸들러는 몇 가지 메시지를 작성하고 나서 새로운 익셉션은 던지는데, 이때 throw_with_nested ( ) 함수를 이용하여 새로운 익셉션 안에 먼저 발생한 익셉션을 담아서 던진다. 익셉션을 중첩시키는 작업은 자동으로 처리된다.

```c++
void doSomething()
{
	try {
		throw runtime_error("Throwing a runtime_error exception");
	} catch (const runtime_error& e) {
		cout << __func__ << " caught a runtime_error" << endl;
		cout << __func__ << " throwing MyException" << endl;
		throw_with_nested(
		MyException("MyException with nested runntime_error"));
	}
}
```

아래 main ( ) 함수는 중첩된 익셉션을 처리하는 방법을 보여준다. 여기서는 doSomething ( ) 함수를 호출하는 코드가 있고, 그 아래에 MyException 익셉션을 처리하는 catch 핸들러가 나온다. 이 핸들러가 익셉션을 잡으면 메시지를 작성한 뒤 dynamic_cast ( )를 이용하여 현재 익셉션에 중첩된 익셉션에 접근한다. 그 안에 중첩된 익셉션이 없다면 널 포인터로 리턴한다. 중첩된 익셉션이 있다면 nested_exception의 rethrow_nested ( ) 메서드를 호출해서 중첩된 익셉션을 다시 던진다. 그러면 다른 try/catch 구문에서 이 익셉션을 처리할 수 있다.

```c++
int main()
{
	try {
		doSomething();
	} catch (const MyException& e) {
		cout << __func__ << "caught MyException: " << e.what() << endl;
    const auto* pNested = dynamic_cast<const nested_exception*>(&e);
    if (pNested) {
			try {
				pNested->rethrow_nested();
			} catch (const runtime_error& e) {
				// 중첩된 익셉션을 처리한다.
				cout << " Nested exception: " << e.what() << endl;
			}
		}
	}
	return 0;
}
```

이 코드를 실행한 결과는 다음과 같다.

```
doSomething caught a runtime_error
doSomething throwing MyException
main caught MyException: MyException with nested runtime_error
Nested exception: Throwing a runtime_error exception
```

앞에 나온 main ( ) 함수는 dynamic_cast ( )를 이용하여 중첩된 익셉션이 있는지 확인했다. 이렇게 중첩된 익셉션을 확인하기 위해 dynamic.cast ( )를 호출할 일이 많기 때문에 이 작업을 수행하는 std:: rethrow_if_nested ( )란 간단한 헬퍼 함수를 표준에 정의해뒀다. 이 헬퍼 함수의 사용법은 다음과 같다.

```c++
int main()
{
	try {
		doSomething();
	} catch (const MyException& e) {
		cout << __func__ << "caught MyException: " << e.what() << endl;
		try {
			rethrow_if_nested(e);
		} catch (const runtime_error& e) {
      // 중첩된 익셉션을 처리한다.
			cout << " Nested exception: " << e.what() << endl;
		}
	}
	return 0;
}
```

## 익셉션 다시 던지기

throw 키워드는 현재 발생한 익셉션을 다시 던질 때 사용한다. 예를 들면 다음과 같다.

```c++
void g() { throw invalid_argument("Some exception"); }

void f()
{
	try {
		g();
	} catch (const invalid_argument& e) {
		cout << "caught in f: " << e.what() << endl;
		throw; // 다시 던지기
	}
}

int main()
{
	try {
		f();
	} caught (const invalid_argument& e) {
		cout << "caught in main: " << e.what() << endl;
	}
	return 0;
}
```

이 코드를 실행한 결과는 다음과 같다.

```
caught in f: Some exception
caught in main: Some exception
```

여기서 throw e;와 같은 문장으로 익셉션을 다시 던지면 된다고 생각하기 쉽지만 그러면 안 된다. 익셉션 객체에 대한 슬라이싱이 발생하기 때문이다. 예를 들어 f ( )에서 std::exception을 잡고, main ( )에서 exception과 invalid_argument 익셉션을 모두 잡으려면 다음과 같이 수정한다.

```c++
void g() { throw invalid_argument("Some exception"); }

void f()
{
	try {
		g();
	} catch (const exception& e) {
		cout << "caught in f: " << e.what() << endl;
		throw; // 다시 던지기
	}
}

int main()
{
	try {
		f();
	} caught (const invalid_argument& e) {
		cout << "invalid_argument caught in main: " << e.what() << endl;
	} caught (const exception& e) {
		cout << "exception caught in main: " << e.what() << endl;
	}
	return 0;
}
```

여기서 invalid_argument가 exception을 상속한 점을 명심한다. 이 코드를 실행하면 예상대로 다음과 같이 출력된다.

```
caught in f: Some exception
invalid_argument caught in main: Some exception
```

그런데 f ( )에서 throw; 문장을 다음과 같이 바꿔보자.

```c++
throw e;
```

그러면 실행 결과가 다음과 같이 나온다.

```c++
caught in f: Some exception
exception caught in main: Some exception
```

이렇게 하면 main ( )이 exception 객체를 잡긴 하는데 invalid_argument 객체는 아니다. throw e; 문장에서 슬라이싱이 발생해서 invalid_argument가 exception으로 돼버렸기 때문이다.

> **익셉션을 다시 던질 때는 항상 throw;로 적어야 한다. e란 익셉션을 다시 던지기 위해 throw e;와 같이 작성하면 안 된다.**

## 스택 풀기와 청소

어떤 코드가 익셉션을 던지면 이를 받아서 처리할 catch 핸들러를 스택에서 찾는다. 이때 catch 핸들러는 현재 스택 프레임에 바로 있을 수도 있고, 몇 단계의 함수 호출 스택을 거슬러 올라가야 나타날 수도 있다. 어떻게든 catch 핸들러를 발견하면 그 핸들러가 정의된 스택 단계로 되돌아가는데, 이 과정에서 중간 단계에 있던 스택 프레임을 모두 풀어버린다. 이를 **스택 풀기** _^stack^_ _^unwinding^_ 라 부르며, 스코프가 로컬인 소멸자를 모두 호출하고, 각 함수에서 미처 실행하지 못한 코드는 건너뛴다.

그런데 스택 풀기가 발생할 때 포인터 변수를 해제하고 리소스를 정리하는 작업은 실행되지 않는다. 그래서 다음과 같은 경우 문제가 발생할 수 있다.

```c++
void funcOne();
void funcTwo();

int main()
{
	try {
		funcOne();
	} catch (const exception& e) {
		cerr << "Exception caught!" << endl;
		return 1;
	}
	return 0;
}

void funcOne()
{
	string str1;
  string str2 = new string();
  funcTwo();
	delete str2;
}

void funcTwo()
{
	ifstream filestream;
	fileStream.open("filename");
	throw exception();
	filestream.close();
}
```

funcTwo ( )에서 익셉션을 던질 때 가장 가까운 핸들러는 main ( )에 있다. 그래서 실행 흐름은 즉시 funcTwo ( )에 있던 throw exception ( ); 문장에서 main ( )의 cerr << "Exception caught!" << endl;로 건너뛴다.

funcTwo ( )의 실행 지점은 익셉션을 던진 문장에 여전히 머물러 있다. 따라서 그 뒤에 나온 다음 문장은 실행되지 않는다.

```c++
fileStream.close();
```

다행히 ifstream 소멸자는 호출된다. filestream이 스택에 있는 로컬 변수이기 때문이다. ifstream 소멸자가 파일을 대신 닫아주므로 리소스 누수가 발생하지 않는다. filestream을 동적으로 할당했다면 제거되지 않기 때문에 파일은 닫히지 않고 그대로 남게 된다.

funcOne ( )에서 실행 지점이 funcTwo ( ) 호출에 있으므로 그 뒤에 나온 다음 문장은 실행되지 않는다.

```c++
delete str2;
```

따라서 메모리 누수가 발생한다. 스택 풀기 과정에서 str2에 대해 delete를 자동으로 호출해주지 않기 때문이다. 그런데 str1은 제대로 해제된다. 이는 스택에 있는 로컬 변수이기 때문이다. 스택 풀기 과정에서 로컬에 있는 변수는 모두 제대로 해제된다.

> **익셉션 처리 구문을 작성할 때 메모리나 리소스 누수가 발생하지 않도록 주의한다.**

바로 이 때문이 C 언어에서 사용하던 할당 모델과 익셉션 같은 최신 프로그래밍 기법을 섞어 _쓰면_ 안 된다. C 방식에서 new를 호출해서 C++처럼 보이게 만들어도 마찬가지다. C++로 코드를 작성할 때는 반드시 스택 기반 할당 방식을 적용해야 한다.

### 스마트 포인터 활용

스택 기반 할당 기법을 사용할 수 없다면 스마트 포인터를 활용한다. 그러면 익셉션 처리 과정에 메모리나 리소스 누수 방지 작업을 자동으로 처리할 수 있다. 스마트 포인터 객체가 제거될 때마다 그 포인터에 할당된 리소스도 헤제된다. 예를 들어 앞에서 본 funcOne ( ) 함수에서 스마트 포인터인 unique_ptr를 사용하도록 수정해보자. 참고로 이 포인터는 \<memory>에 정의돼 있다.

```c++
void funcOne()
{
	string str1;
	auto str2 = make_unique<string>("hello");
	funcTwo();
}
```

여기서 str2 포인터는 funcOne ( )을 호출한 후 리턴될 때 또는 그 안에서 익셉션이 발생할 때 자동으로 제거된다.

물론 특별히 이유가 있을 때만 동적으로 할당해야 한다. 예를 들어 앞에서 나온 funcOne에서 굳이 str2를 동적으로 할당할 필요가 없다. 스택 기반 string 변수로도 충분하다. 여기서 동적으로 할당한 이유는 단지 익셉션을 던진 후 일어나는 일을 간단히 보여주기 위해서다.

### 익셉션을 잡고, 리소스 정리한 뒤, 익셉션 다시 던지기

메모리 및 리소스 누수를 방지하기 위한 또 다른 기법으 각 함수마다 발생 가능한 익셉션을 모두 잡아서 리소스를 제대로 정리한 뒤 그 익셉션을 다시 스택의 상위 핸들러로 던지는 것이다. 예를 들어 funcOne ( )을 이렇게 처리하도록 수정하면 다음과 같다.

```c++
void funcOne()
{
	string str1;
	string str2 = new string();
	try {
		funcTwo();
	} catch (...) {
		delete str2;
		throw; // 같은 익셉션을 다시 위로 던진다.
	}
	delete str2;
}
```

이 함수는 funcTwo ( )를 호출하는 문장과 여기서 발생하는 익셉션을 처리하는 핸들러를 정의하고 있다. 이 핸들러는 리소스를 정리한 뒤(str2에 대해 delete를 호출해서) 잡은 익셉션을 다시 던진다. 이렇게 현재 잡은 익셉션을 다시 던질 때는 throw란 키워드만 적어도 된다. 참고로 catch 문에서 모든 종류의 익셉션을 잡고 싶다면 위 코드처럼 ...을 지정한다.

> **익셉션을 잡고, 리소스를 정리한 뒤, 익셉션을 다시 던지기보다는 스마트 포인터나 RAII 클래스를 사용하는 방법이 더 좋다.**

## 익셉션 처리 과정에서 흔히 발생하는 문제

### 메모리 할당 에러

지금까지 소개한 예제는 모두 메모리 할당 에러가 발생하지 않는다고 가정했다. 현재 흔히 사용하는 64비트 플랫폼에서 이런 일이 발생할 일은 거의 없지만, 모바일 시스템이나 레거시 시스템에서는 메모리 할당 에러가 드물지 않게 발생한다. 이런 시스템에서는 반드시 메모리 할당 에러에 대처하는 코드를 구현해야 한다. 우누는 메모리 할당 에러를 처리하기 위한 다양한 기능을 제공한다.

new나 new [ ]에서 메모리 할당할 수 없을 때 기본적으로 수행하는 동작은 \<new> 헤더 파일에 정의된 bad_alloc 익셉션을 던지는 것이다. 따라서 이 익셉션을 적절히 처리하는 catch 구문을 작성한다.

```c++
int* ptr = nullptr;
size_t integerCount = numeric_limits<size_t>::max();
try {
	ptr = new int[integerCount];
} catch (const bad_alloc& e) {
	cerr << __FILE__ << "(" << __LINE__
    	 << "): Unable to allocate memory: " << e.what() << endl;
	// 메모리 할당 에러를 처리한다.
	return;
}
// 메모리 할당에 성공했다면 함수를 정상적으로 진행한다.
```

위 코드는 미리 정의된 전처리 기호인 \_\_FILE\_\_과 \_\_LINE\_\_을 사용하고 있다. 컴파일하면 이 기호 자리에 파일 이름과 현재 줄 번호가 들어간다. 이렇게 하면 디버깅하기 편하다.

물론 구현하는 프로그램에 따라 실행 과정에서 발생할 수 있는 모든 에러를 프로그램의 최상위 코드에서 try/catch 블록 하나만으로 처리해도 된다.

한 가지 주의할 점은 에러 로깅 과정에 메모리 할당이 발생할 수 있는데, new 과정에 에러가 발생했다면 에러 메시지를 로깅하는 데 필요한 메모리도 없을 가능성이 높다.

#### 1. 익셉션을 던지지 않는 new

익셉션 메커니즘을 사용하지 않고, 예전 C 방식처럼 메모리 할당에 실패하면 널 포인터를 리턴하도록 작성해도 된다. C++는 **익셉션을 던지지 않는** nothrow 버전의 new와 new [ ]도 제공한다. 이 버전은 메모리 할당에 실패하면 익셉션을 던지지 않고 nullptr를 리턴한다. 이렇게 하려면 new 대신 new(nothrow) 구문을 사용한다. 예를 들면 다음과 같다.

```c++
int* ptr = new(nothrow) int[integerCount];
if (ptr == nullptr) {
	cerr << __FILE__ << "(" << __LINE__
			 << "): Unable to allocate memory: " << e.what() << endl;
	// 메모리 할당 에러를 처리한다.
	return;
}
// 메모리 할당에 성공했다면 함수를 정상적으로 진행한다.
```

문법은 좀 어색하지만 ’nothrow’란 키워드에 new의 인수를 전달하듯이 적어야 한다(실제로 인수이기도 하다).

#### 2. 메모리 할당 에러 처리 방식 커스터마이스하기

C++는 **new 핸들러** 콜백 함수를 커스터마이즈하는 기능을 제공한다. 기본적으로 new와 new [ ]는 new 핸들러를 따로 사용하지 않고 bad_alloc 익셉션을 던지기만 한다. 그런데 new 핸들러를 정의하면 메모리 할당 루틴에서 에러가 발생했을 때 익셉션을 던지지 않고 정의된 new 핸들러를 호출한다. new 핸들러가 리턴하면 메모리 할당 루틴은 메모리를 다시 할당하려 시도하는데, 이때 실패해도 다시 new 핸들러를 호출한다. 따라서 new 핸들러에서 다음 세 가지 중 한 가지 방식으로 구현하지 않으면 무한 루프가 발생할 수 있다. 이 중 몇 가지 방식은 다른 방식보다 낫다. 각각을 살펴보자.

- **메모리 추가하기** : 공간을 확보하기 위한 한 가지 방법은 프로그램 구동시 큰 덩어리의 메모리를 할당했다가 new 핸들러로 해제하게 만드는 것이다. 구체적인 활용 예로 메모리 할당 에러가 발생할 때 현재 사용자의 상태가 사리지지 않도록 저장해야 할 때가 있다. 여기서 핵심은 프로그램을 구동할 때 원하는 상태(예: 워드프로세서라면 문서 전체)를 저장할 수 있을 정도로 충분한 양의 메모리를 할당하는 데 있다. new 핸들러가 호출되면 이 블록을 해제한 뒤 상태(예: 문서)를 저장하고 프로그램을 다시 구동해서 저장된 상태(문서)를 불러오면 된다.

- **익셉션 던지기** : C++ 표준에서는 new 핸들러에서 익셉션을 던질 때 반드시 bad_alloc이나 이를 상속한 익셉션을 던지도록 명시하고 있다. 예를 들면 다음과 같다.

  - bad_alloc를 상속한 document_recovery_alloc을 던진다. 이 익셉션을 catch 문으로 잡아서 문서를 저장하는 작업을 수행한 뒤 애플리케이션을 다시 구동한다.
  - 또는 please_terminate_me 익셉션을 던진다. 이 익셉션도 bad_alloc을 상속한 것이다. 최상위 함수(예 : main ( ))에서 이 익셉션을 잡은 뒤 최상위 함수에서 리턴하도록 처리한다. 이때 exit ( )를 호출하지 말고 최상위 함수에서 리턴해서 프로그램을 종료시키는 것이 바람직하다.

- **다른 new 핸들러 설정하기** : 이론적으로 new 핸들러를 여러 개 만들어서 각각 메모리를 생성하고 문제가 발생하면 다른 new 핸들러를 설정할 수 있다. 하지만 실제 효과에 비해 코드가 복잡하다는 단점이 있다.

new 핸들러에서 위 세 가지 작업 중 어느 하나라도 하지 않으면 메모리 할당 에러가 발생할 때 무한 루프에 빠진다.

메모리 할당 에러가 발생할 때 new 핸들러를 호출하지 않게 하고 싶다면 new를 호출하기 전에 new 핸들러의 디폴트값인 nullptr로 잠시 되돌려둔다.

new 핸들러는 \<new> 헤더 파일에 선언된 set_new_handler ( )를 호출해서 설정한다. 예를 들어 에러 메시지를 로그에 기록하고 익셉션을 던지도록 new 핸들러를 작성하면 다음과 같다.

```c++
class please_terminatejne : public bad_alloc { };

void myNewHandler()
{
	cerr << "Unable to allocate memory." << endl;
	throw please_terminate_me();
}
```

new 핸들러에는 반드시 인수와 리턴값이 없어야 한다. 이렇게 하면 앞에서 설명한 세 가지 처리 방식 중 두 번째처럼 please_terminate_me가 발생한다.

이렇게 작성한 new 핸들러를 설정하는 방법은 다음과 같다.

```c++
int main()
{
  try {
		// 새로 만든 new 핸들러를 설정하고 예전 것은 저장해둔다.
		new_handler oldHandler = set_new_handler(myNewHandler);

		// 할당 에러를 발생시킨다.
		size_t numInts = numeric_limits<size_t>::max();
		int* ptr = new int[numInts];

		// 예전 new 핸들러로 되돌린다.
		set_new_handler(oldHandler);
	} catch (const please_termiante_me&) {
		cerr << __FILE__ << "(" << __LlNE__
				 << "): Unable to allocate memory: " << e.what() << endl;
		return 1;
	}
	return 0;
}
```

여기서 new 핸들러는 함수 포인터 타입에 대한 typedef며, set_new_handler ( )는 이를 인수로 받는다.

### 생성자에서 발생하는 에러

이 절에서는 생성자에서 발생하는 익셉션을 처리하는 방법은 Matrix 클래스 템플릿을 사용하는 코드로 소개한다. 참고로 여기서는 생성자에서 할당한 리소스를 mMatrix라는 일반 포인터 _^raw^_ _^pointer^_ 로 표현하는데, 생성자 익셉션 처리 과정에서 발생할 수 있는 문제를 보여주기 위해 이렇게 했다. 실전에서는 이렇게 일반 포인터를 사용하면 안 되고, 표준 라이브러리에서 제공하는 컨테이너와 같은 안전한 방법으로 구현해야 한다. Matrix 클래스 템플릿은 다음과 같이 선언돼 있다.

```c++
template <typename T>
class Matrix
{
	public:
		Matrix(size_t width, size_t height);
		virtual ~Matrix();
	private:
		void cleanup();

  	size_t mWidth = 0;
  	size_t mHeight = 0;
  	T** mMatrix = nullptr;
}
```

Matrix 클래스의 구현 코드는 다음과 같다. 여기서 첫 번째 new 호출은 try/catch 구문으로 묶여 있지 않다. 이 생성자는 나중에 해제할 리소스를 할당하지 않기 때문에 익셉션이 발생해도 문제없다. 하지만 그 뒤에 나오는 new 호출문은 생성자에서 메모리를 할당하기 때문에 익셉션이 발생할 때 반드시 메모리를 해제해야 한다. 그런데 T의 생성자에서 발생할 익셉션이 뭔지 알 수 없다. 그래서 catch 문이 모든 익셉션을 잡도록 ...을 지정했다. 참고로 첫 번째 new 호출로 할당된 원소가 nullptr란 값을 가진다. 이렇게 하면 cleanup ( ) 메서드에서 처리하기 편하다. nullptr에 대해 delete를 호출할 수 있기 때문이다.

```c++
template <typename T>
Matrix<T>::Matrix(size_t width, size_T height)
{
	mMatrix = new T*[width] {}; // 배열을 영으로 초기화한다.

  // mWidth와 mHeight 멤버를 생성자 이니셜라이저로 초기화하면 안 된다.
	// 앞에 나온 mMatrix를 성공적으로 할당했을 때만 초기화해야 하기 때문이다.
  mWidth = width;
	mHeight = hegith;
	try {
		for (size_t i = 0; i < width; ++i) {
			mMatrixfi] = new "「[height];
		}
	} catch(...) {
		std::cerr << "Exception caught in constructor,, cleaning up..
							<< std::endl;
    cleanup();
    // 발생한 익셉션을 모두 bad_alloc 익셉션 안에 중첩시킨다.
    std::throw_with_nested(std::bad_alloc());
  }
}

template <typename T>
Matrix<T>::~Matrix()
{
	cleanup();
}

template <typename T>
void Matrix<T>::cleanup()
{
	for (size_t i = 0; i < mWidth; ++i)
		delete[] mMatrix[i];
	delete[] mMatrix;
	mMatrix = nullptr;
	mWidth = mHeight = 0;
}
```

> **익셉션이 발생해서 생성자를 벗어나면 그 객체에 대한 소멸자가 호출되지 않는다는 점을 반드시 명심한다.**

앞에서 정의한 Matrix 클래스 템플릿을 다음과 같이 테스트해보자.

```c++
class Element
{
	// 코드가 최대한 간결하면서 최소한의 기능만 갖추개 할려면
	// Element 클래스의 생성자에서 익셉션을 던질 수 있도록 작성한다.
	private:
		int mValue;
};

int main()
{
	Matrix<Element> m(10, 10);
	return 0;
}
```

여기 상속을 적용하면 어떻게 되는지 궁금할 것이다. 파생 클래스 생성자보다 베이스 클래스 생성자가 먼저 실행된다. 그래서 파생 클래스 생성자에서 익셉션이 발생하면 C++ 런타임은 생성자를 정상적으로 실행했던 베이스 클래스의 소멸자를 호출한다.

> C++는 생성자 실행을 정상적으로 마친 객체에 대해 소멸자가 실행되도록 보장한다. 따라서 생성자에서 익셉션 없이 정상 처리된 객체는 소멸자가 반드시 호출된다.

### 생성자를 위한 함수 try 블록

생성자 이니셜라이저에서 발생한 익셉션은 어떻게 처리해야 할까? 이 절에서는 **함수 try 블록**이란 기능으로 이런 익셉션을 처리하는 방법을 소개한다. 함수 try 블록은 일반 함수뿐만 아니라 생성자에 적용할 수도 있다. 이 절에서는 생성자에 적용하는 방법을 소개한다. 이 기능이 추가된지 상당히 오래됐음에도 불구하고 숙련된 C++ 프로그래머조차 이 기능을 모르는 경우가 많다.

생성자에 대한 함수 try 블록을 작성하는 방법을 의사코드로 표현하면 다음과 같다

```c++
MyClass::MyClass()
try
  : ＜생성자 이니셜라이저＞
{
	/* ... 생성자 본문 … */
}
catch (const exception& e)
{
	/* ... */
}
```

여기서 try 키워드를 생성자 이니셜라이저 바로 앞에 적었다. catch 문은 반드시 생성자를 닫는 중괄호 뒤에 나와야 한다. 그러므로 실질적으로 생성자 밖에 놓인다. 함수 try 블록을 생성자에 적용할 때는 다음과 같은 점에 주의한다.

- catch 문은 생성자 이니셜라이저나 생성자 본문에서 발생한 익셉션을 잡아서 처리한다.

- catch 문은 반드시 현재 발생한 익셉션을 다시 던지거나 새 익셉션을 만들어 던져야 한다. catch 문에서 이렇게 처리하지 않으면 런타임이 자동으로 현재 익셉션을 다시 던진다.

- catch 문은 생성자에 전달된 인수에 접근할 수 있다.

- catch 문이 함수 try 블록에서 익셉션을 잡으면 생성자의 실행을 정상적으로 마친 베이스 클래스나 그 객체로 된 멤버는 catch 문을 시작하기 전에 소멸된다.

- catch 문 안에서는 객체로 된 멤버 변수에 접근하면 안 된다. 바로 앞에서 설명한 것처럼 catch 문이 실행되기 전에 소멸되기 때문이다. 그런데 익셉션이 발생하기 전에 그 객체에 논클래스 타입(예: 일반 포인터 타입) 데이터 멤버를 초기화했다면 여기에 접근할 수 있다. 단, 이런 리소스를 정리하는 작업은 catch 문에서 처리해야 한다. 뒤에 나온 코드가 이렇게 처리한다.

- 함수 try 블록에 있는 catch 문은 그 안에 담긴 함수에서 값을 리턴할 때 return 키워드를 사용할 수 없다. 생성자는 원래 아무것도 리턴하지 않기 때문이다.

앞에서 나열한 제약사항을 감안하면 생성자에 대한 함수 try 블록은 다음과 같은 제한된 상황에만 적합하다.

- 생성자 이니셜라이저에서 던진 익셉션을 다른 익셉션으로 변환할 때

- 메시지를 로그 파일에 기록할 때

- 생성자 이니셜라이저에서 할당한, 소멸자로 자동 제거할 수 없는 리소스를 익셉션을 던지기 전에 해제할 때

다음 예는 함수 try 블록을 구현하는 방법을 보여준다. 여기서 SubObject 클래스는 runtime_error 익셉션을 던지는 생성자 하나만 갖고 있다.

```c++
class SubObject
{
	public:
		SubObject(int i);
};

SubObject::SubObject(int i)
{
	throw std::runtime_error(error("Exception by SubOject ctor"));
}
```

MyClass는 다음과 같이 int\* 타입의 멤버 변수 하나와 SubObject 타입의 멤버 변수 하나를 갖고 있다.

```c++
class MyClass
{
	public:
		MyClass();
	private:
		int* mData = nullptr;
		SubObject mSubObject;
```

SubObject 클래스에는 디폴트 생성자가 없다. 다시 말새 mSubObject를 MyClass의 생성자 이니셜라이저로 초기화해야 한다. MyClass 생성자는 함수 try 블록을 이용하여 생성자 이니셜라이저에서 발생한 익셉션을 처리한다.

```c++
MyClass::MyClass()
try
	: mData(new int[42]{l, 2, 3}), mSubObject(42)
{
	/* 생성자 바디 */
}

catch (const std::exception& e)
{
	// 메모리 정리
	deleted mData;
	mData = nuUptr;
	cout << "function-try=block caught: '" << e.what() << "'" << endl;
}
```

여기서 명심할 점은 생성자에 대한 함수 try 블록 안에 있는 catch 문은 반드시 현재 익셉션을 다시 던지거나 새 익셉션을 생성해서 던져야 한다. 앞에 나온 catch 문을 보면 아무 익셉션도 던지지 않는데, 그러면 C++ 런타임이 현재 익셉션을 대신 던져준다. 앞에서 정의한 클래스를 사용하는 예를 간단히 들면 다음과 같다.

```c++
int main()
{
	try {
		MyClass m;
	} catch (const std::exception& e) {
		cout << "main() caught: 1" << e.what() << "'" << endl;
	}
	return 0;
}
```

이 코드를 실행하면 다음과 같이 출력된다.

```
function-try-block caught: 'Exception by SubObject ctor'
main() caught: 'Exception by SubObject ctor'
```

참고로 이 예제처럼 코드를 작성하면 위험하다. 초기화 순서에 따라 catch 문에 진입할 때 mData에 이상한 값을 할당될 수 있다. 이렇게 알 수 없는 값을 가진 포인터에 대해 delete를 호출하면 예상치 못한 동작이 나타날 수 있다. 그래서 위 예제에서 이런 문제를 방지하려면 mData 멤버를 std::unique_ptr와 같은 스마트 포인터로 선언하고, 함수 try 블록을 제거하는 것이다.

함수 try 블록은 생성자뿐만 아니라 일반 함수에도 적용할 수 있다. 하지만 일반 함수에서 이를 사용해서 나아질 것이 없다. 함수 본문 안에서 간단히 try/catch 문으로 표현해도 되기 때문이다. 단, 함수 try 블록을 생성자에서 사용할 때와 달리 일반 함수에서 사용하면 현재 익셉션을 다시 던지거나 catch 문에서 새 익셉션을 만들어서 던질 필요가 없고 C++ 런타임에서 대신 던져주지도 않는다.

### 소멸자에서 익셉션을 처리하는 방법

소멸자에서 발생하는 에러는 반드시 소멸자 안에서 처리해야 한다. 소멸자에서 익셉션을 다른 곳으로 던지면 안 된다. 그 이유는 다음과 같다.

1. 소멸자를 명시적으로 `noexcept(false)`로 지정하지 않거나, 그 클래스에 있는 객체 _중_ 소멸자에 `noexcept(false)`가 지정된 것이 없다면 내부적으로 `noexcept`를 선언된 것으로 취급한다.`noexcept` 소멸자에서 익셉션을 던지면 C++ 런타임은 `std::terminate()`를 호출해서 프로그램을 종료한다.

2. 소멸자는 이미 다른 익셉션이 발생해서 스택 풀기를 수행하는 과정에서도 실행될 수 있다. 스택 풀기를 하는 도중에 소멸자에서 익셉션을 던지면 C++ 런타임은 `std::terminate()`를 호출해서 애플리케이션을 종료한다. C++는 소멸자가 호출되는 원인이 일반 함수의 정상적인 종료인지 아니면 `delete`를 호출했기 때문인지 아니면 스택 풀기 때문인지 알아내는 기능을 제공한다. \<exception> 헤더 파일에 선언된 `uncaught_exceptions()` 함수를 호출하면 아직 잡지 않은 익셉션, 즉 이미 발생했지만(던져졌지만) 아직 `catch` 문에는 매칭되지 않은 익셉션 수를 리턴한다. `uncaught_exceptions()`의 리턴값이 0보다 크면 스택 풀기 과정에 있다는 뜻이다. 하지만 이 함수를 제대로 활용하기 힘들고 코드도 지저분해져서 사용하지 않는 것이 좋다. 참고로 C++17 이전에는 이 함수의 이름이 단수형인 `uncaught_exception()`이었고, bool 타입의 값을 리턴했다. 즉, true를 리턴하면 현재 스택 풀기 중에 있다는 뜻이다.

3. 그렇다면 클라이언트는 어떤 액션을 취해야 할까? 클라이언트는 소멸자를 직접 호출하지 않고 delete를 이용하여 간접적으로 소멸자를 호출한다. 그런데 소멸자에서 익셉션을 던지면 클라이언트는 어떻게 처리해야 할까? 이미 delete를 호출한 객체에 다시 delete를 호출할 수도 없고, 소멸자를 직접 호출할 수도 없다. 이처럼 클라이언트가 할 수 있는 일이 없기 때문에 굳이 익셉션 처리의 부담을 줄 이유가 없다.

4. 소멸자는 객체에서 사용할 메모리나 리소스를 해제할 마지막 기회다. 함수 실행 도중에 익셉션을 던져 이 기회를 놓쳐버리면 다시 돌아가 메모리나 리소스를 해제할 수 없다.

> **소멸자에서 호출한 함수나 메서드에서 발생한 익셉션을 잡아서 처리할 때 조심하기 바란다.**
