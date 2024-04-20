// import { useState } from 'react';
// import { EditorState, convertToRaw } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import draftToHtml from 'draftjs-to-html';

// const Editors = () => {


//   const [firstValue, setFirstValue] = useState(() => EditorState.createEmpty());
//   const stepOne = draftToHtml(convertToRaw(firstValue.getCurrentContent()));



//   const description = stepOne;
//   console.log(description);

//   return (
//     <div>
//       <div className="my-10 col-lg-12 col-md-12">
//         <p className="mb-1 text-black ">Product Description </p>
//         <Editor
//           editorState={firstValue}
//           onEditorStateChange={setFirstValue}
//           required={true}
//           wrapperClassName="wrapper-class"

//           toolbarClassName="toolbar-class"
//           editorClassName="editor-class"
//           toolbar={{

//             options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'remove', 'history'],
//             image: {
//               urlEnabled: true,
//               uploadEnabled: true,
//               alignmentEnabled: true,
//               uploadCallback: undefined,
//               previewImage: true,
//               defaultSize: {
//                 height: "auto",
//                 width: "auto",
//               },
//               fontSize: { className: 'demo-option-custom-medium' },
//               fontFamily: {
//                 options: [
//                   "Arial",
//                   "sans-serif",
//                   "Georgia",
//                   "Impact",
//                   "Tahoma",
//                   "Times New Roman",
//                   "Verdana",
//                 ],
//                 className: undefined,
//                 component: undefined,
//                 dropdownClassName: undefined,
//               },
//             },
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Editors;
