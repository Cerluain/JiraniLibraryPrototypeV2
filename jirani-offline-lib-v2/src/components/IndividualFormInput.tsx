interface Props{ 
    id: string;
    label: string;
    type?: string;
    placeholderText?: string;
}

export default function IndividualFormInput({id, label, type = 'text', placeholderText=''}: Props) {
    const helpTextId = `${id}Help`;

    return ( // From Gemini:
    <div className="mb-3 text-start">
      <label htmlFor={id} className="form-label text-start fs-4">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholderText}
      />
      
    </div>
  );
}
