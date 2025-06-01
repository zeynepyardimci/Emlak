import AddListingForm from "@/admin/AddListingForm";
import ListingTable from "@/admin/ListingTable";

const AdminPanel = () => {
  return (
    <div className="bg-tas max-w-7xl mx-auto my-10">
      <h1 className="text-green-800 text-2xl font-bold text-center mb-6">Admin Panel</h1>
      <AddListingForm />
      <ListingTable />
    </div>
  );
};

export default AdminPanel;
