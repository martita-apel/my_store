import { expect } from "chai";
import { mount } from "@vue/test-utils";
import Register from "@/components/Register.vue";

describe("Register", () => {
  // Given/Arrange (dado que existe...)
  const wrapper = mount(Register);
  let checkbox = wrapper.find("input[type='checkbox']");
  let registerBtn = wrapper.find("button[type='submit']");
  it("has a disabled button", () => {
    // When/Act (cuando pasa cierta cosa o evento)
    checkbox.setChecked(false);
    // Then/Assert (entonces, pasa cierta cosa)
    expect(registerBtn.classes("isDisabled")).to.be.true;
  });
  it("has a button not disabled when checkbox is check", () => {
    checkbox.setChecked(true);
    expect(registerBtn.classes("isDisabled")).to.be.false;
  });
  it("register a User", () => {
    let isSent = false;
    function stubMethod() {
      isSent = true;
    }
    const wrapper = mount(Register, {
      methods: {
        submitForm: stubMethod,
      },
    });
    // 1) Encontrar los cambios necesarios
    let username = wrapper.find("input[type='text']");
    let email = wrapper.find("input[type='email']");
    let password = wrapper.find("input[type='password']");
    let registerBtn = wrapper.find("button[type='submit']");

    // 2) Asignar los valores a los campos
    username.setValue("Baltazar Bratt");
    email.setValue("bbratt@mail.com");
    password.setValue("holahola");
    // 3) Enviar formulario
    registerBtn.trigger("click");
    // 4) Probar que se envió el registro
    expect(isSent).to.be.true;
  });
});
