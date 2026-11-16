import { Card, Tag, Typography } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";

const { Text } = Typography;

export default function CharacterCard({ name, age, city, isStudent, img }) {
    return (
        <Card
            hoverable
            cover={
                <img
                    alt={name}
                    src={img}
                    style={{ height: 240, objectFit: "cover" }}
                />
            }
        >
            <Card.Meta
                title={name}
                description={
                    <>
                        <div>
                            <Text type="secondary">Возраст: </Text>
                            {age}
                        </div>
                        <div>
                            <EnvironmentOutlined /> {city}
                        </div>
                        <Tag color={isStudent ? "green" : "red"} style={{ marginTop: 8 }}>
                            {isStudent ? "Студент" : "Не студент"}
                        </Tag>
                    </>
                }
            />
        </Card>
    );
}