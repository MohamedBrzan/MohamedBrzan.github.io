import React, { useState } from "react";
import { Button, Form, Col, Row, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/forms.css";

export function CheckoutForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group
          as={Col}
          md="4"
          controlId="validationCustom01"
          className="mb-3"
        >
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          md="4"
          controlId="validationCustom02"
          className="mb-3"
        >
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          md="4"
          controlId="validationCustomUsername"
          className="mb-3"
        >
          <Form.Label>E-Mail</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="E-Mail"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a E-Mail.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group
          as={Col}
          md="6"
          controlId="validationCustomUsername"
          className="mb-3"
        >
          <Form.Label>Phone Number</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="number"
              placeholder="Phone Number"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please Valid a Phone Number.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Link
        to="delivery-address"
        className="form-btn py-2 px-5 text-center border-warning mt-5 d-block m-auto w-50 text-capitalize rounded border border-dark"
      >
        {" "}
        <b>next</b>
      </Link>
    </Form>
  );
}

export function CheckoutFormRtl() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group
          as={Col}
          md="4"
          controlId="validationCustom01"
          className="mb-3"
        >
          <Form.Label>?????????? ??????????</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="?????????? ??????????"
            defaultValue=""
          />
          <Form.Control.Feedback>???????? ???????? !</Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          md="4"
          controlId="validationCustom02"
          className="mb-3"
        >
          <Form.Label>?????????? ????????????</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="?????????? ????????????"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          md="4"
          controlId="validationCustomUsername"
          className="mb-3"
        >
          <Form.Label>??????????????</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="??????????????"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              ???? ???????? ???????? ???????? ????????????????
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group
          as={Col}
          md="6"
          controlId="validationCustomUsername"
          className="mb-3"
        >
          <Form.Label>?????? ???????????? ??????????????</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="number"
              placeholder="?????? ???????????? ??????????????"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              ???????? ?????? ???????? ????????
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Link
        to="/home-rtl/delivery-address-rtl"
        className="form-btn py-2 px-5 text-center border-warning mt-5 d-block m-auto w-50 text-capitalize rounded border border-dark"
      >
        {" "}
        <b>????????????</b>
      </Link>
    </Form>
  );
}

export function DeliveryAddressForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3 mt-5">
        <Form.Group
          as={Col}
          md="4"
          controlId="validationCustom01"
          className="mb-3"
        >
          <Form.Label>Block</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Block"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          md="4"
          controlId="validationCustom02"
          className="mb-3"
        >
          <Form.Label>Street</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Street"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          md="4"
          controlId="validationCustom01"
          className="mb-3"
        >
          <Form.Label>Avenue</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Avenue (Optional)"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          md="4"
          controlId="validationCustomUsername"
          className="mb-3"
        >
          <Form.Label>House No.</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="House No."
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please Enter Your House No..
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group
          as={Col}
          md="6"
          controlId="validationCustomUsername"
          className="mb-3"
        >
          <Form.Label>Special Directions Option</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="number"
              placeholder="Special Directions Option"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please Enter Your Special Directions Option.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Link
        to="payment"
        className="form-btn py-2 px-5 text-center border-warning mt-5 d-block m-auto w-50 text-capitalize rounded border border-dark"
      >
        {" "}
        <b>next</b>
      </Link>
    </Form>
  );
}

export function DeliveryAddressFormRtl() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3 mt-5">
        <Form.Group
          as={Col}
          md="4"
          controlId="validationCustom01"
          className="mb-3"
        >
          <Form.Label>?????? ????????????</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="?????? ????????????"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          md="4"
          controlId="validationCustom02"
          className="mb-3"
        >
          <Form.Label>????????????</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="????????????"
            defaultValue=""
          />
          <Form.Control.Feedback>???????? ???????? !</Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          md="4"
          controlId="validationCustom01"
          className="mb-3"
        >
          <Form.Label>????????????</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="???????????? (?????????????? )"
            defaultValue=""
          />
          <Form.Control.Feedback>???????? ???????? !</Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          md="4"
          controlId="validationCustomUsername"
          className="mb-3"
        >
          <Form.Label>?????? ????????????</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="?????? ????????????"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              ???????????? ?????????? ?????? ??????????.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group
          as={Col}
          md="6"
          controlId="validationCustomUsername"
          className="mb-3"
        >
          <Form.Label>???????? ?????????????????? ????????????</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="number"
              placeholder="???????? ?????????????????? ????????????"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              ???????????? ?????????? ???????? ?????????????????? ???????????? ????.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Link
        to="/home-rtl/payment-rtl"
        className="form-btn py-2 px-5 text-center border-warning mt-5 d-block m-auto w-50 text-capitalize rounded border border-dark"
      >
        {" "}
        <b>????????????</b>
      </Link>
    </Form>
  );
}
