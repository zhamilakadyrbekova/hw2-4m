import {Wrapper} from "./components/Wrapper.jsx";
import { characters } from "./components/Data.jsx";
import Card from "./components/Card.jsx";
import { Row, Col } from "antd";

function App() {

  return (
   <div>
       <h1>Персонажи</h1>
        <Wrapper>
            <Row gutter={[16, 16]} style={{ padding: 24, marginTop: 40 }}>
                {characters.map((item) => (
                    <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
                        <Card {...item}/>
                    </Col>
                ))}
            </Row>
        </Wrapper>
   </div>
  )
}

export default App
