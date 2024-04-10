import EditPostForm from "@/app/components/EditPostForm";

const getTicketById = async (id) => {
  const API_URL = process.env.API_URL

  try {
    const res = await fetch(`${API_URL}/api/Posts/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

let updateTicketData = {};
const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return <EditPostForm ticket={updateTicketData} />;
};

export default TicketPage;