import React, { useState } from "react";
import { FileUpload } from "primereact/fileupload";
import MDSnackbar from "components/MDSnackbar";

export default function UploadFiles() {
  const [successSB, setSuccessSB] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const renderSuccessSB = (
    <MDSnackbar
      color="success"
      icon="check"
      title="File Uploaded"
      content="File uploaded successfully"
      dateTime="now"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  return (
    <div className="card">
      {renderSuccessSB}
      <FileUpload
        name="file"
        url="http://127.0.0.1:8000/uploadconfirmo"
        multiple
        onBeforeSend={(formData) => formData.formData.append("userId", "88888")}
        onUpload={() => renderSuccessSB && openSuccessSB()}
        accept=".pdf,.doc"
        withCredentials={true}
        maxFileSize={10000000}
        emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>}
      />
    </div>
  );
}
