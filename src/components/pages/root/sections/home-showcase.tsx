import { useState } from "react";
import { Key } from "@react-types/shared";

import { Tabs, Tab } from "@nextui-org/react";

import { PageSection } from "../../../layout/page-section";
import { Icons } from "../../../icons";
import { ProductCard, ProductCardInterface } from "../../../ui/product-card";

import showcaseData from "../../../../data/home-showcase.json";
import { ProductCardLoading } from "../../../ui/loading/product-card-loading";

const HomeShowcase = () => {
  const [selectedTab, setSelectedTab] = useState<Key>(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleTabSelected = (e: Key) => {
    setSelectedTab(e);

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-foreground-200 dark:bg-foreground-50 min-h-96">
      <PageSection className="text-center">
        <div>
          <h2 className="text-4xl sm:text-5xl pt-10 mb-3 font-medium">
            Prebuilts You Can Modify
          </h2>
          <p className="text-foreground-800 dark:text-foreground-500 text-medium">
            Pick your gaming PC and upgrade your parts
          </p>
        </div>
        <Tabs
          aria-label="View Products"
          color="success"
          classNames={{ base: "mb-8 mt-8 ", tabList: "shadow-md" }}
          className="bg-transparent"
          selectedKey={selectedTab}
          onSelectionChange={handleTabSelected}
          isDisabled={isLoading}
        >
          <Tab
            key="featured"
            onClick={() => handleTabSelected(0)}
            title={
              <div className="flex items-center space-x-2 ">
                <Icons.award />
                <span>Featured</span>
              </div>
            }
          >
            <ProductList data={showcaseData.featured} isLoading={isLoading} />
          </Tab>
          <Tab
            key="trending"
            onClick={() => handleTabSelected(1)}
            title={
              <div className="flex items-center space-x-2">
                <Icons.trending />
                <span>Trending</span>
              </div>
            }
          >
            <ProductList data={showcaseData.featured} isLoading={isLoading} />
          </Tab>
        </Tabs>
      </PageSection>
    </div>
  );
};

export { HomeShowcase };

const ProductList = ({
  data,
  isLoading,
}: {
  data: ProductCardInterface[];
  isLoading: boolean;
}) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {isLoading
        ? Array(6)
            .fill(0)
            .map((_, index) => (
              <li key={index}>
                <ProductCardLoading />
              </li>
            ))
        : data.map((product) => (
            <li key={product.id}>
              <ProductCard {...product} />
            </li>
          ))}
    </ul>
  );
};
