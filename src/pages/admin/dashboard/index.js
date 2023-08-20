import Breadcrumb from "@/components/Breadcrumb/Index";
import AdminSidebar from "@/components/dashboard/admin/sidebar/AdminSideBar";

const Dashboard = () => {
    return (
        <div>
            <Breadcrumb />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sit laborum error tenetur vitae quaerat, impedit iusto, iure quidem expedita, blanditiis nisi similique. Expedita hic aliquid explicabo nihil quia perferendis illo ea doloribus veniam eum repudiandae nisi adipisci sit, quis temporibus odio est nam dolorum, alias minus? Corrupti suscipit exercitationem pariatur. Veniam voluptas iusto consequuntur, eveniet vitae fugiat. Exercitationem reprehenderit excepturi hic deleniti debitis. Quae, voluptas dolorem iure animi hic voluptatem, magnam, possimus quis dolor doloremque quisquam! Nemo quod fugiat quisquam rem repudiandae ipsum. Iste maiores cupiditate voluptates, explicabo amet tempora quis repellendus, praesentium deleniti fugit eos eveniet, est laudantium?
        </div>
    );
};

export default Dashboard;
Dashboard.getLayout = function getLayout(page) {
    return <AdminSidebar>{page}</AdminSidebar>;
};