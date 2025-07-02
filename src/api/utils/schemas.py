from enum import Enum
from pydantic import BaseModel
from typing import List, Optional, Dict
from ai.const.index import VariantType, VariantCreationStatus, VariantStatus

class Variant(BaseModel):
    variant_id: str
    variant_type: VariantType
    variant_data: dict
    status: str
    created_at: str
    updated_at: str
    previous_variant_id: Optional[str] = None  # Reference to the previous variant

class ProjectCreate(BaseModel):
    project_id: Optional[str]
    user_id: str
    query_text: str
    status: str
    created_at: str
    updated_at: str

class ProjectResponse(BaseModel):
    project_id: str
    status: str
    variants: List[Variant]

class VariantUpdate(BaseModel):
    user_id: str
    project_id: str
    variant_type: VariantType
    query_text: str
    current_code_snippet: Optional[str] = None

class NotifyVariant(BaseModel):
    project_id: str
    variant_id: str
    variant_type: VariantType
    user_id: str
    query_text: str
    variant_data: dict
    status: VariantStatus
    variant_creation_status: VariantCreationStatus
    project_status: Optional[str] = None


class VariantStream(BaseModel):
    project_id: str
    variant_id: str
    variant_type: VariantType
    user_id: str
    stream_data: dict
    query_text: str
    variant_creation_status: VariantCreationStatus


class NotifyAgentStatus(BaseModel):
    project_id: str
    variant_id: str
    variant_type: VariantType
    user_id: str
    agent_status: str


class RetryVariant(BaseModel):
    project_id: str
    user_id: str
    variant_type: VariantType
