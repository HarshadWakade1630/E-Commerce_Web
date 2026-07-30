// // "use client";

// // import { usePathname, useRouter } from "next/navigation";
// // import { useAuth } from "../../context/AuthContext";

// // export default function Sidebar() {
// //     const pathname = usePathname();
// //     const router = useRouter();
// //     const { user } = useAuth();

// //     const links = [
// //         {
// //             name: "Profile",
// //             href: "/dashboard/profile",
// //         },
// //         {
// //             name: "Orders",
// //             href: "/dashboard/order",
// //         },
// //         {
// //             name: "Account",
// //             href: "/dashboard/account",
// //         },
// //         {
// //             name: "Settings",
// //             href: "/dashboard/settings",
// //         },
// //     ];

// //     return (
// //         <div className="w-full bg-zinc-950 text-white p-5">

// //             <div className="flex-col justify-center item-start mb-20 py-5">

// //                 <h1 className="text-3xl font-bold">
// //                     Your Account
// //                 </h1>
// //                 <p className="text-sm">
// //                     Welcome {user?.name}
// //                 </p>

// //             </div>

// //             <div className="flex flex-col gap-3">

// //                 {links.map((link) => (
// //                     <button
// //                         key={link.href}
// //                         onClick={() => { router.replace(link.href) }}
// //                         className={` text-left px-2 py-3 rounded-lg transition ${pathname === link.href ? "bg-[#d1d1d1] text-black" : "bg-zinc-800"}`}
// //                     >
// //                         {link.name}
// //                     </button>
// //                 ))}

// //             </div>
// //         </div>
// //     );
// // }



// "use client";

// import { usePathname, useRouter } from "next/navigation";
// import { useAuth } from "../../context/AuthContext";

// export default function Sidebar() {
//     const pathname = usePathname();
//     const router = useRouter();
//     const { user } = useAuth();

//     const links = [
//         {
//             name: "Profile",
//             href: "/dashboard/profile",
//         },
//         {
//             name: "Orders",
//             href: "/dashboard/order",
//         },
//         {
//             name: "Account",
//             href: "/dashboard/account",
//         },
//         {
//             name: "Settings",
//             href: "/dashboard/settings",
//         },
//     ];

//     return (
//         <div className="w-full bg-zinc-950 text-white p-5">

//             <div className="flex-col justify-center item-start mb-20 py-5">

//                 <h1 className="text-3xl font-bold">
//                     Your Account
//                 </h1>
//                 <p className="text-sm">
//                     Welcome {user?.name}
//                 </p>

//             </div>

//             <div className="flex flex-col gap-3">

//                 {links.map((link) => (
//                     <button
//                         key={link.href}
//                         onClick={() => { router.replace(link.href) }}
//                         className={` text-left px-2 py-3 rounded-lg transition ${pathname === link.href ? "bg-[#d1d1d1] text-black" : "bg-zinc-800"}`}
//                     >
//                         {link.name}
//                     </button>
//                 ))}

//             </div>
//         </div>
//     );
// }