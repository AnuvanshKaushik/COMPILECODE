export const executeCode = async (language, code) => {
  const response = await fetch("http://localhost:5000/api/run", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ language, code }),
  });
  return await response.json();
};
