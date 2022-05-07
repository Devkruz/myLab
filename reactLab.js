import { Form, Container} from "react-bootstrap";

//This component will recieve and array of form data, and display according to the input type
//Dependency React and bootstrape
//Expected data 
/*     --text/email/number input
       {
          label: "FullName",
          id: "name",
          type: "text/email/number",
          tag: "control",
          important: true
        }
       --text-area input
       {
          label: "Testimony ",
          id: "testi-msg",
          type: "textarea",
          tag: "textarea",
          important: false
        }
        --select input     
           {
              label: "Country",
              id: "country",
              type: "select",
              tag: "select",
              option: [
                { default:"Select Country"},
                {value:"country1", name:"Country One"},
                {value:"country2", name:"Country Two"},
                {value:"country3", name:"Country Three"},
              ]
            }
        --radio input
            {
              label: "Are You New To Church ?",
              type: "radio",
              tag: "check",
              option: [
                {type:"radio", name:" new", id:"yes", label: "Yes"},
                {type:"radio", name:" new", id:"no", label: "No"}
              ]
            }
 */

export default function formGroup(forms) {
    
    return forms.map((group,index)=> {
      
      
      if(group.tag === "control") {
          return (
             <Form.Group key={index} className="mb-3">
                 <Form.Label htmlFor={group.id}>{group.label}{group.important ? <span style={{color:'#F79B45', padding:"0 3px"}}>*</span> : null}</Form.Label>
                 <Form.Control id={group.id} type={group.type} placeholder={group.label}/>
             </Form.Group>
          );
      };


      if(group.tag === "select") {
            return (
                <Form.Group  key={index} className="mb-3"> 
                <Form.Label htmlFor={group.id}>{group.label}{group.important ? <span>*</span> : null}</Form.Label>
                <Form.Select id={group.id}>
                    <option>{group.option[0].name}</option>
                     {group.option.map((select,index)=> {
                          if (index !== 0) {
                              return(
                                <option key={index} value={select.value}>{select.name}</option>
                              );
                          };
                     })};   
                </Form.Select>
            </Form.Group>
            );
      };

      if(group.tag === "check") {
            return (
                <Form.Group key={index} className="mb-3">
                     <Form.Label>{group.label}{group.important ? <span>*</span> : null}</Form.Label>
                     <Container className="p-0">
                         {group.option.map((opt, index)=> {
                                return (
                                     <span key={index}>
                                        <Form.Label  htmlFor={opt.id}>{opt.label}</Form.Label>
                                        <Form.Check className="px-2" id={opt.id} type={opt.type} name={opt.name} inline/>
                                    </span>
                                );
                         })};  
                    </Container> 
                </Form.Group>
            );
      };

      if(group.tag === "textarea") {
                  return (
                      <Form.Group key={index} className="mb-3">
                        <Form.Label htmlFor={group.id}>{group.label}</Form.Label>
                        <Form.Control id={group.id} as={group.type} row={3}></Form.Control>
                      </Form.Group>
                  );
      };

      return;

    });
};