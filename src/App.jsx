import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Container, Content, Row } from "./components/styles";
import { useState } from "react";

useState;
function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleCurrentNumber = (number) => {
    setCurrentNumber(
      (currentNumber) =>
        `${currentNumber === "0" ? "" : currentNumber}${number}`
    );
  };

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
    }
  };

  const handleSubNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
    }
  };

  const handleDivNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(division));
    }
  };

  const handleMultNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("x");
    } else {
      const multiplication = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiplication));
    }
  };

  const handleRestNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("%");
    } else {
      const rest = Number(firstNumber) % Number(currentNumber);
      setCurrentNumber(String(rest));
    }
  };

  const handleEquals = () => {
    switch (operation) {
      case "+":
        handleSumNumbers();
        setOperation("");
        break;

      case "-":
        handleSubNumbers();
        setOperation("");
        break;

      case "/":
        handleDivNumbers();
        setOperation("");
        break;

      case "x":
        handleMultNumbers();
        setOperation("");
        break;

      case "%":
        handleRestNumbers();
        setOperation("");
        break;

      default:
        break;
    }
  };

  return (
    <Container>
      <Content>
        <h1>Calculadora</h1>
        <Input value={currentNumber} />
        <Row>
          <Button label="-" />
          <Button label="-" />
          <Button label="%" onClick={handleRestNumbers} />
          <Button label="AC" onClick={handleOnClear} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleCurrentNumber("7")} />
          <Button label="8" onClick={() => handleCurrentNumber("8")} />
          <Button label="9" onClick={() => handleCurrentNumber("9")} />
          <Button label="/" onClick={handleDivNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleCurrentNumber("4")} />
          <Button label="5" onClick={() => handleCurrentNumber("5")} />
          <Button label="6" onClick={() => handleCurrentNumber("6")} />
          <Button label="x" onClick={handleMultNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleCurrentNumber("1")} />
          <Button label="2" onClick={() => handleCurrentNumber("2")} />
          <Button label="3" onClick={() => handleCurrentNumber("3")} />
          <Button label="-" onClick={handleSubNumbers} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleCurrentNumber("0")} />
          <Button label="." onClick={() => handleCurrentNumber("2")} />
          <Button label="=" onClick={handleEquals} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
