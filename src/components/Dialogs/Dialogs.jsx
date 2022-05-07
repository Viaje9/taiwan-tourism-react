export default function Dialogs() {
  return (
    <div className="dialogs">
      <div className="card">
        <div className="content">是否要刪除此{{ type }}?</div>
        <div className="btn_area">
          <button className="btn mr-4" onClick={() => $emit('result', false)}>取消</button>
          <button
            className="btn bg-j-blue-200 text-white"
            onClick={() => $emit('result', true)}
          >
            確定
          </button>
        </div>
      </div>
    </div>
  )
}