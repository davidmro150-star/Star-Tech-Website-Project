"use client";

import { useMemo, useState } from "react";

import PCBuilderTopBar from "./PCBuilderTopBar";
import ComponentRow from "./ComponentRow";
import ProductSelector from "./ProductSelector";
import BuildSummary from "./Buildsummary";

import { pcBuilderCategories } from "../api/pcBuilderData";

export default function PCBuilder() {
  const [selectedComponents, setSelectedComponents] = useState({});
  const [activeComponent, setActiveComponent] = useState(null);

  // Core Components
  const coreComponents = pcBuilderCategories.filter((component) =>
    [
      "cpu",
      "cpuCooler",
      "motherboard",
      "ram",
      "storage",
      "graphicsCard",
      "powerSupply",
      "casing",
    ].includes(component.key)
  );

  // Peripherals & Others
  const peripheralComponents = pcBuilderCategories.filter((component) =>
    [
      "monitor",
      "casingCooler",
      "keyboard",
      "mouse",
      "headphone",
    ].includes(component.key)
  );

  // Number of selected items
  const itemCount = Object.keys(selectedComponents).length;

  // Total Price
  const totalPrice = useMemo(() => {
    return Object.values(selectedComponents).reduce(
      (total, product) => total + product.price,
      0
    );
  }, [selectedComponents]);

  // Total Wattage
  const totalWattage = useMemo(() => {
    return Object.values(selectedComponents).reduce(
      (total, product) => total + product.wattage,
      0
    );
  }, [selectedComponents]);

  // Choose Component
  const handleChooseComponent = (component) => {
    setActiveComponent(component);
  };

  // Select Product
  const handleSelectProduct = (product) => {
    if (!activeComponent) return;

    setSelectedComponents((previous) => ({
      ...previous,
      [activeComponent.key]: product,
    }));

    setActiveComponent(null);
  };

  // Remove Product
  const handleRemoveProduct = (key) => {
    setSelectedComponents((previous) => {
      const updated = { ...previous };

      delete updated[key];

      return updated;
    });
  };

  // Add PC to Cart
  const handleAddToCart = () => {
    if (itemCount === 0) {
      alert("Please select at least one component.");
      return;
    }

    console.log("PC Build:", selectedComponents);

    alert(
      `PC build added to cart!\nTotal: ৳${totalPrice.toLocaleString()}`
    );
  };

  // Save PC
  const handleSave = () => {
    localStorage.setItem(
      "pcBuilder",
      JSON.stringify(selectedComponents)
    );

    alert("Your PC build has been saved.");
  };

  // Print
  const handlePrint = () => {
    window.print();
  };

  // Screenshot
  const handleScreenshot = () => {
    alert("Screenshot feature can be connected later.");
  };

  return (
    <main className="min-h-screen bg-[#f5f5f5]">

      {/* ONE COMPLETE PC BUILDER SECTION */}
      <section className="mx-auto w-full max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8">

        <div className="rounded-lg border border-gray-200 bg-white">

          {/* TOP BAR */}
          <PCBuilderTopBar
            handleAddToCart={handleAddToCart}
            handleSave={handleSave}
            handlePrint={handlePrint}
            handleScreenshot={handleScreenshot}
          />

          {/* BUILDER CONTENT */}
          <div className="p-4 sm:p-6 lg:p-8">

            {/* Builder + Summary */}
            <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_350px]">

              {/* LEFT SIDE */}
              <div>

                {/* Heading + Stats */}
                <div className="mb-6 border-b border-gray-200 pb-6">

                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                    {/* Heading */}
                    <div>
                      <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                        Build Your Custom PC
                      </h1>

                      <p className="mt-2 text-sm text-gray-500">
                        Choose your preferred components and build your own PC.
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid w-full grid-cols-3 divide-x divide-gray-200 rounded-lg border border-gray-200 bg-gray-50 lg:w-auto">

                      {/* Wattage */}
                      <div className="min-w-[80px] px-4 py-3 text-center">
                        <p className="text-xs text-gray-500">
                          Wattage
                        </p>

                        <p className="mt-1 text-sm font-bold text-gray-800">
                          {totalWattage}W
                        </p>
                      </div>

                      {/* Items */}
                      <div className="min-w-[70px] px-4 py-3 text-center">
                        <p className="text-xs text-gray-500">
                          Items
                        </p>

                        <p className="mt-1 text-sm font-bold text-gray-800">
                          {itemCount}
                        </p>
                      </div>

                      {/* Total */}
                      <div className="min-w-[100px] px-4 py-3 text-center">
                        <p className="text-xs text-gray-500">
                          Total
                        </p>

                        <p className="mt-1 text-sm font-bold text-[#e21b23]">
                          ৳{totalPrice.toLocaleString()}
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

                {/* CORE COMPONENTS */}
                <div className="rounded-lg border border-gray-200 bg-white">

                  <div className="border-b border-gray-200 px-5 py-4">
                    <h2 className="text-lg font-bold text-gray-800">
                      CORE COMPONENTS
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                      Select the main components for your PC.
                    </p>
                  </div>

                  <div>
                    {coreComponents.map((component) => (
                      <ComponentRow
                        key={component.key}
                        component={component}
                        selectedProduct={
                          selectedComponents[component.key]
                        }
                        onChoose={handleChooseComponent}
                        onRemove={handleRemoveProduct}
                      />
                    ))}
                  </div>

                </div>

                {/* PERIPHERALS & OTHERS */}
                <div className="mt-6 rounded-lg border border-gray-200 bg-white">

                  <div className="border-b border-gray-200 px-5 py-4">
                    <h2 className="text-lg font-bold text-gray-800">
                      PERIPHERALS & OTHERS
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                      Add peripherals and other accessories.
                    </p>
                  </div>

                  <div>
                    {peripheralComponents.map((component) => (
                      <ComponentRow
                        key={component.key}
                        component={component}
                        selectedProduct={
                          selectedComponents[component.key]
                        }
                        onChoose={handleChooseComponent}
                        onRemove={handleRemoveProduct}
                      />
                    ))}
                  </div>

                </div>

              </div>

              {/* RIGHT SIDE */}
              <BuildSummary
                selectedComponents={selectedComponents}
                onAddToCart={handleAddToCart}
              />

            </div>

          </div>

        </div>

      </section>

      {/* PRODUCT SELECTOR */}
      <ProductSelector
        component={activeComponent}
        onSelect={handleSelectProduct}
        onClose={() => setActiveComponent(null)}
      />

    </main>
  );
}