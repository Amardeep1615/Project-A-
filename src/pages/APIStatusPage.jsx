import React, { useEffect, useState } from "react";

const ApiStatus = () => {
  // List of APIs to check (replace docsLink with your real docs/monitoring pages)
  const apis = React.useMemo(() => [
    { 
      name: "Authentication API", 
      url: "https://api.example.com/auth/health", 
      docsLink: "/docs/auth" 
    },
    { 
      name: "Courses API", 
      url: "https://api.example.com/courses/health", 
      docsLink: "/docs/courses" 
    },
    { 
      name: "Payments API", 
      url: "https://api.example.com/payments/health", 
      docsLink: "/docs/payments" 
    },
    { 
      name: "User Profile API", 
      url: "https://api.example.com/users/health", 
      docsLink: "/docs/users" 
    },
    { 
      name: "Notifications API", 
      url: "https://api.example.com/notifications/health", 
      docsLink: "/docs/notifications" 
    },
  ], []);

  const [statuses, setStatuses] = useState(
    apis.map((api) => ({ ...api, status: "⏳ Checking..." }))
  );

  const checkApis = React.useCallback(async () => {
    const results = await Promise.all(
      apis.map(async (api) => {
        try {
          const response = await fetch(api.url);
          if (response.ok) {
            return { ...api, status: "✅ Online" };
          } else {
            return { ...api, status: "⚠️ Issues Detected" };
          }
        } catch (error) {
          console.error(`Error checking ${api.name}:`, error);
          return { ...api, status: "❌ Offline" };
        }
      })
    );
    setStatuses(results);
  }, [apis]);

  useEffect(() => {
    checkApis();

    const interval = setInterval(checkApis, 30000);
    return () => clearInterval(interval);
  }, [checkApis]);

  return (
    <div className="p-6 bg-white rounded-xl shadow-md max-w-5xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        API Status Dashboard
      </h2>

      <table className="w-full border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="py-3 px-4 border-b">Service</th>
            <th className="py-3 px-4 border-b">Endpoint</th>
            <th className="py-3 px-4 border-b text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {statuses.map((api, index) => (
            <tr key={index} className="hover:bg-gray-50 transition">
              <td className="py-3 px-4 border-b font-medium">
                <a
                  href={api.docsLink}
                  className="text-blue-600 hover:underline"
                >
                  {api.name}
                </a>
              </td>
              <td className="py-3 px-4 border-b text-gray-500 text-sm">
                <a
                  href={api.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-500"
                >
                  {api.url}
                </a>
              </td>
              {(() => {
                let statusClass = "text-yellow-600";
                if (api.status.includes("Online")) {
                  statusClass = "text-green-600";
                } else if (api.status.includes("Offline")) {
                  statusClass = "text-red-600";
                }
                return (
                  <td
                    className={`py-3 px-4 border-b text-center font-semibold ${statusClass}`}
                  >
                    {api.status}
                  </td>
                );
              })()}
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-sm text-gray-500 text-center mt-4">
        Last checked: {new Date().toLocaleTimeString()} | Auto-refreshes every
        30s
      </p>
    </div>
  );
};

export default ApiStatus;
