import React from "react"
import {Form, Button, Col, Row} from "react-bootstrap";

class Main extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className={"main"}>
                <Form className={"addNote"}>
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={4}>
                            Aihe
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="name" name="topic" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalDate">
                        <Form.Label column sm={4}>
                            Päivämäärä
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="name" name="topic" placeholder={"dd.MM.yyyy"} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalMessage">
                        <Form.Label column sm={4}>
                            Kuvaus
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control as="textarea" type="message" name="message" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="additionalInfo">
                        <Form.Label column sm={4}>
                            Lisätietoja
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="additional" name="additionalInfo" />
                        </Col>
                    </Form.Group>

                    <fieldset>
                        <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={10}>
                                Onko valmis?
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="Valmista on"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Ei vielä"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                />
                            </Col>
                        </Form.Group>
                    </fieldset>

                    <div className="nappula">
                        <Button variant="warning" type="submit" color="#ffedbc">
                            Tallenna
                        </Button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default Main