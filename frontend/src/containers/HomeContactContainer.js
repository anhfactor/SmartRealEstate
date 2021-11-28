import React, { useState } from "react";
import { Section, Form } from "../components";
import { setRealEstate } from "../helpers/contract"

const HomeContactContainer = () => {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [location, setLocation] = useState();
  const [price, setPrice] = useState();

  return (
    <Section bgColor="--bs-fade-blue">
      <Section.InnerContainer>
        <Section.Header></Section.Header>
        <Section.Content>
          <Section.Flex>
            <Section.FlexItem width="70%">
              <Section.SubTitle size="1">Contact Us</Section.SubTitle>
              <Section.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
                nemo dolorem amet cupiditate sequi cum?
              </Section.Text>
              <Section.Flex>
                <Section.FlexItem width="50%">
                  <Section.SubTitle>We Will Get In Touch</Section.SubTitle>
                  <Section.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non,
                  </Section.Text>
                </Section.FlexItem>
                <Section.FlexItem width="50%">
                  <Section.SubTitle>
                    Get Instant Support From Us
                  </Section.SubTitle>
                  <Section.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non,
                  </Section.Text>
                </Section.FlexItem>
              </Section.Flex>
            </Section.FlexItem>
            <Section.FlexItem width="30%" bg="true">
              <Form>
                <Form.FormGroup>
                  <Form.Input type="text" placeholder="Name" 
                  value={name}
                  onChange={(e) => { 
                    setName(e.currentTarget.value)
                  }}/>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Input type="text" placeholder="Image" value={image}
                  onChange={(e) => { 
                    setImage(e.currentTarget.value)
                  }}/>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Input type="text" placeholder="Description" value={description}
                  onChange={(e) => { 
                    setDescription(e.currentTarget.value)
                  }}/>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Input type="text" placeholder="Location" value={location}
                  onChange={(e) => { 
                    setLocation(e.currentTarget.value)
                  }}/>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Input type="text" placeholder="Price" value={price}
                  onChange={(e) => { 
                    setPrice(e.currentTarget.value)
                  }}/>
                </Form.FormGroup>
                
                <Form.FormGroup>
                  <Form.ButtonInput value="Offer real estate" 
                  onClick={() => setRealEstate(name, image, description, location, price)}/>
                </Form.FormGroup>
              </Form>
            </Section.FlexItem>
          </Section.Flex>
        </Section.Content>
      </Section.InnerContainer>
    </Section>
  );
};

export default HomeContactContainer;
