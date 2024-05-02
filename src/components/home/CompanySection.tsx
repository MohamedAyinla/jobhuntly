import Category from "../globals/Category";
import {companies} from "../../obj/companies.tsx"

function CompanySection() {
  return (
    <section className="p-4 pb-8 space-y-6 ">
        <h3 className="text-[32px] font-semibold text-center ">Explore by <span className="text-accent-blue">category</span></h3>
        <div className="grid grid-cols-1 grid-rows-1 gap-y-4 ">
            {
                companies.map((company) => <Category key={company.id} name={company.name} numJob={company.numJob} svg={company.svg} /> )
            }
        </div>
        <div className="">

        </div>
      </section>
  );
}

export default CompanySection;
