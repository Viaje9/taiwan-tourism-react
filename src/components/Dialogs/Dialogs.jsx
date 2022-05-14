import './Dialogs.css';
export default function Dialogs({doDelete}) {
  return (
    <div className="dialogs">
      <div className="card">
        <div className="content">是否要刪除此{{ type }}?</div>
        <div className="btn_area">
          <button className="btn mr-4" onClick={() => doDelete(false)}>取消</button>
          <button
            className="btn bg-j-blue-200 text-white"
            onClick={() => doDelete( true)}
          >
            確定
          </button>
        </div>
      </div>
    </div>
  )
}