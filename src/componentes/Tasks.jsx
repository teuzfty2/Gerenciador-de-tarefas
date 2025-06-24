function Tasks(props) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 round-md shadow">
      {props.tasks.map((Task) => (
        <li key={Task.id} className="bg-slate-400 text-white p-2 rounded-md">
          {Task.title}
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
