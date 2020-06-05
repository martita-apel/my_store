import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import sinon from "sinon";

import Products from "@/components/Products.vue";

describe("Products.vue", () => {
  let mockProducts = [{ name: "Computadora", price: 100.0, qty: 1 }];
  it('Muestra el titulo "Nuestros Productos"', () => {
    const title = "Nuestros Productos";
    const wrapper = shallowMount(Products, {});
    expect(wrapper.text()).to.include(title);
  }),
    it("Muestra los productos", () => {
      const productName = "Computadora";
      const wrapper = shallowMount(Products, {
        data() {
          return { products: mockProducts };
        },
      });
      /* wrapper.vm.products = [{
      name: 'Computadora',
      price: 100.0,
      qty: 1,
    }] */
      expect(wrapper.text()).to.include(productName);
    }),
    it("Filtra los productos", () => {
      const productName = mockProducts.name;
      const productSearch = "Teclado";
      const wrapper = shallowMount(Products, {
        data() {
          return { products: mockProducts };
        },
      });
      const searchBox = wrapper.find("input");
      searchBox.setValue(productSearch);
      expect(wrapper.text()).to.not.include(productName);
    }),
    it("Añade los productos al carro", () => {
      const clickMethodStub = sinon.stub();
      const wrapper = shallowMount(Products, {
        data() {
          return { products: mockProducts };
        },
        methods: { addToCart: clickMethodStub },
      });
      /* wrapper.setMethods({
        addToCart: clickMethodStub,
      }); */
      const addButton = wrapper.find(".card .button");
      addButton.trigger("click");
      expect(clickMethodStub.called).to.equal(true);
    });
});
